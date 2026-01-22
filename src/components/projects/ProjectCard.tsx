"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  highlights: string[];
  stack: string[];
  links?: {
    github?: string;
    live?: string;
  };
}

export default function ProjectCard({
  title,
  description,
  highlights,
  stack,
  links,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="p-6 border border-gray-700 rounded-xl bg-neutral-900 hover:border-cyan-500/40 focus-within:ring-2 focus-within:ring-cyan-500/30"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      <p className="text-gray-400 text-sm mb-4">{description}</p>

      <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 mb-4">
        {highlights.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mb-4">
        {stack.map((tech) => (
          <span
            key={tech}
            className="text-xs px-3 py-1 rounded-full border border-gray-600 text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {links && (
        <div className="flex gap-4 text-sm">
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              className="text-cyan-400 hover:underline"
            >
              GitHub →
            </a>
          )}
          {links.live && (
            <a
              href={links.live}
              target="_blank"
              className="text-cyan-400 hover:underline"
            >
              Live →
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}
