"use client";

import { motion } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "slide-up" | "slide-left" | "slide-right" | "scale-in";
}

const variantsMap = {
  "slide-up": {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  "slide-left": {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  "slide-right": {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  "scale-in": {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
};

export default function AnimatedSection({ 
  children, 
  className = "", 
  delay = 0,
  variant = "slide-up"
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.6, delay: delay, type: "spring", bounce: 0.2 }}
      variants={variantsMap[variant]}
      className={className}
    >
      {children}
    </motion.div>
  );
}
