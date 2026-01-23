"use client";
import { motion } from "framer-motion";

export default function HomeAura() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 120,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute -inset-32 rounded-full
        bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_60%)]"
    />
  );
}
