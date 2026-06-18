"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const bounds = useRef<{ width: number; height: number; left: number; top: number } | null>(null);

  const handleMouseEnter = () => {
    if (ref.current) {
      bounds.current = ref.current.getBoundingClientRect();
    }
  };

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!bounds.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = bounds.current;
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
    bounds.current = null;
  };

  const { x, y } = position;

  return (
    <motion.div
      className={`relative inline-block ${className}`}
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 350, damping: 15, mass: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
