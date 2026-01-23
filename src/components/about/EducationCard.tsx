"use client";

import { motion } from "framer-motion";

interface EducationCardProps {
  title: string;
  level: string;
  score: string;
  duration: string;
  link?: string;
}

export default function EducationCard({
  title,
  level,
  score,
  duration,
  link,
}: EducationCardProps) {
  const CardWrapper = link ? motion.a : motion.div;

  return (
    <CardWrapper
      href={link}
      target={link ? "_blank" : undefined}
      rel={link ? "noopener noreferrer" : undefined}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      className="
        relative block p-6 rounded-2xl
        border border-white/10
        bg-white/5 backdrop-blur-xl
        shadow-[0_0_40px_rgba(34,211,238,0.08)]
        hover:border-cyan-400/40
        transition
      "
    >
      {/* Subtle glow layer */}
      <div
        className="
          pointer-events-none absolute inset-0 rounded-2xl
          bg-gradient-to-br from-cyan-400/10 to-transparent
          opacity-0 hover:opacity-100 transition
        "
      />

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>

        <p className="text-sm text-gray-300 mb-2">{level}</p>

        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-400">
          <span>{score}</span>
          <span>•</span>
          <span>{duration}</span>
        </div>
      </div>
    </CardWrapper>
  );
}
