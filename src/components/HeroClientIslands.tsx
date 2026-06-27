"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const NetworkBackground = dynamic(
  () => import("@/components/NetworkBackground").then((mod) => mod.NetworkBackground),
  { ssr: false }
);

export function DeferredNetworkBackground() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only show on desktop, after the page is idle
    const mq = window.matchMedia("(min-width: 768px)");
    if (!mq.matches) return; // Skip on mobile entirely

    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(() => setShow(true), { timeout: 3000 });
      return () => cancelIdleCallback(id);
    } else {
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!show) return null;
  return <NetworkBackground />;
}

export function StatCounter({
  target,
  suffix = "",
  isFloat = false,
}: {
  target: number;
  suffix?: string;
  isFloat?: boolean;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    // Delay counter start to avoid competing with initial render
    const timer = setTimeout(() => setStarted(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!started) return;

    let startTime: number;
    const duration = 1500;
    let raf: number;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(target * ease);
      if (progress < 1) raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [target, started]);

  const displayValue = isFloat ? count.toFixed(1) : Math.floor(count);
  return (
    <>
      {displayValue}
      {suffix}
    </>
  );
}
