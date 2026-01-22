"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>

        <p className="text-gray-400 text-lg leading-relaxed">
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
        </p>
      </motion.div>
    </section>
  );
}
