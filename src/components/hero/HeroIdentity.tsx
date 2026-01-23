"use client";

import { motion } from "framer-motion";

export default function HeroIdentity() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-left max-w-2xl"
    >
      {/* System label */}
      <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-6">
        system.initializing
      </p>

      {/* Name */}
      <h1 className="text-5xl sm:text-6xl font-semibold text-white leading-tight">
        Aditya Pranjal
      </h1>

      {/* Role */}
      <p className="mt-3 text-sm uppercase tracking-[0.35em] text-gray-400">
        Software Engineer
      </p>

      {/* Philosophy */}
      <div className="mt-10 space-y-3 text-gray-300">
        <p>→ building intelligent systems</p>
        <p>→ clarity over complexity</p>
        <p>→ purpose-driven engineering</p>
      </div>
    </motion.div>
  );
}
