"use client";

import { motion } from "framer-motion";

export default function NetworkFlow() {
  return (
    <motion.div
      animate={{
        backgroundPositionX: ["0%", "100%"],
        backgroundPositionY: ["0%", "100%"],
      }}
      transition={{
        duration: 60,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute inset-0 opacity-30
        bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.25),transparent_45%),
            radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.15),transparent_50%)]"
    />
  );
}
