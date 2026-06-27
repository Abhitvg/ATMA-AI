"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const isHovering = useRef(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Only show on desktop with pointer (not touch)
    if (!window.matchMedia("(pointer: fine)").matches) {
      cursor.style.display = "none";
      return;
    }

    let cursorX = -100;
    let cursorY = -100;
    let displayX = -100;
    let displayY = -100;
    let raf: number;

    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const animate = () => {
      displayX = lerp(displayX, cursorX, 0.15);
      displayY = lerp(displayY, cursorY, 0.15);
      cursor.style.transform = `translate(${displayX}px, ${displayY}px) scale(${isHovering.current ? 2 : 1})`;
      cursor.style.backgroundColor = isHovering.current
        ? "var(--accent)"
        : "transparent";
      raf = requestAnimationFrame(animate);
    };

    const onMove = (e: MouseEvent) => {
      cursorX = e.clientX - 12;
      cursorY = e.clientY - 12;
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      isHovering.current = !!(
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      );
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-6 h-6 rounded-full border-2 border-accent pointer-events-none z-[100] mix-blend-difference hidden md:block"
      style={{
        willChange: "transform",
        transition: "background-color 0.15s ease, border-color 0.15s ease",
      }}
    />
  );
}
