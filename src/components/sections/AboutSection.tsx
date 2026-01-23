"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlassSection from "@/components/ui/GlassSection";
import EducationCard from "@/components/about/EducationCard";

export default function AboutSection() {
  const [open, setOpen] = useState(false);

  return (
    <GlassSection>
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold mb-6"
        >
          About Me
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 text-lg leading-relaxed max-w-3xl mb-10"
        >
          I’m a software developer who enjoys turning complex ideas into clean,
          reliable, and scalable systems. I’ve worked across full-stack and
          backend development, building modern web platforms with Next.js and
          React, designing RESTful APIs, and using Python for data processing,
          automation, and machine-learning workflows. I like understanding how
          systems behave under the hood and improving them with clarity,
          performance, and purpose. Outside of work, I enjoy travelling and
          exploring new places, listening to music, watching films, and spending
          time in the mountains. I’m also drawn to strategy-driven games like
          cricket and chess, which keep me sharp, patient, and thoughtful in how
          I approach problems.
        </motion.p>

        {/* Education toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="
            flex items-center gap-2
            text-cyan-400 font-medium
            transition hover:underline
          "
        >
          {open ? "Hide Education ▲" : "View Education ▼"}
        </button>

        {/* Education cards with animation */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              className="mt-10 grid md:grid-cols-2 gap-6"
            >
              <EducationCard
                title="Birla Institute of Technology, Mesra"
                level="B.Tech in Electrical & Electronics Engineering"
                score="CGPA: 7.5 / 10"
                duration="2022 – 2026"
                link="https://www.bitmesra.ac.in"
              />

              <EducationCard
                title="DAV Public School, Jamshedpur"
                level="Intermediate (Class XII)"
                score="Percentage: 91.2%"
                duration="2019 – 2021"
                link="https://davbistupur.org"
              />

              <EducationCard
                title="Rajendra Vidyalaya, Jamshedpur"
                level="Matriculation (Class X)"
                score="Percentage: 94.6%"
                duration="2018 – 2019"
                link="https://rajendravidyalaya.edu.in"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </GlassSection>
  );
}
