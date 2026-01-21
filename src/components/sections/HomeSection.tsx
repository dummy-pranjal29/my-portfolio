"use client";

import { motion } from "framer-motion";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          Building intelligent systems
          <br />
          <span className="text-cyan-400">with clarity & purpose</span>
        </h1>

        <p className="mt-6 text-gray-400 text-lg max-w-xl mx-auto">
          Developer • Explorer • Problem Solver
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-cyan-500 text-black rounded-lg font-medium"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-gray-600 rounded-lg"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
