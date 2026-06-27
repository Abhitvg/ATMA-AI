"use client";

import { useRef, useEffect, type ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "slide-up" | "slide-left" | "slide-right" | "scale-in";
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  variant = "slide-up",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Apply delay via setTimeout for staggered reveals
          if (delay > 0) {
            setTimeout(() => el.classList.add("is-visible"), delay * 1000);
          } else {
            el.classList.add("is-visible");
          }
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const variantClass = variant !== "slide-up" ? variant : "";

  return (
    <div
      ref={ref}
      className={`animated-section ${variantClass} ${className}`}
    >
      {children}
    </div>
  );
}
