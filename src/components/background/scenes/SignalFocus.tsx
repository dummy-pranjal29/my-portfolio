"use client";

import { motion } from "framer-motion";

export default function SignalFocus() {
  return (
    <motion.div
      animate={{ opacity: [0.15, 0.3, 0.15] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute inset-0
        bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.25),transparent_45%)]"
    />
  );
}
