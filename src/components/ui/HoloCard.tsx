"use client";

import { motion } from "framer-motion";

export default function HoloCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="
        relative rounded-2xl
        border border-cyan-400/20
        bg-black/40 backdrop-blur-xl
        p-6
        shadow-[0_0_40px_rgba(34,211,238,0.15)]
      "
    >
      <div
        className="absolute inset-0 rounded-2xl
        bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0
        hover:opacity-100 transition"
      />
      {children}
    </motion.div>
  );
}
