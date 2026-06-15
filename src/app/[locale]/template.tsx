"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        mass: 0.5,
      }}
      className="flex-grow flex flex-col"
    >
      {children}
    </motion.div>
  );
}
