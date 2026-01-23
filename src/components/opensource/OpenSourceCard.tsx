"use client";

import { motion } from "framer-motion";

interface OpenSourceCardProps {
  project: string;
  contribution: string;
  description: string;
  link: string;
}

export default function OpenSourceCard({
  project,
  contribution,
  description,
  link,
}: OpenSourceCardProps) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -6, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="
        relative block p-6 rounded-2xl
        border border-white/10
        bg-white/5 backdrop-blur-xl
        shadow-[0_0_40px_rgba(34,211,238,0.08)]
        hover:border-cyan-400/40
        transition
      "
    >
      {/* subtle glow */}
      <div
        className="
          pointer-events-none absolute inset-0 rounded-2xl
          bg-gradient-to-br from-cyan-400/10 to-transparent
          opacity-0 hover:opacity-100 transition
        "
      />

      <div className="relative z-10">
        <h3 className="text-lg font-semibold mb-1">{project}</h3>
        <p className="text-sm text-cyan-400 mb-3">{contribution}</p>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.a>
  );
}
