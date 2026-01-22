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
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      className="p-6 border border-gray-700 rounded-xl bg-neutral-900 hover:border-emerald-500/40"
    >
      <h3 className="text-lg font-semibold mb-1">{project}</h3>

      <p className="text-sm text-emerald-400 mb-2">{contribution}</p>

      <p className="text-gray-400 text-sm mb-4">{description}</p>

      <a
        href={link}
        target="_blank"
        className="text-sm text-emerald-400 hover:underline"
      >
        View Contribution →
      </a>
    </motion.div>
  );
}
