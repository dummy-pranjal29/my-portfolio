"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";

<div className="mt-10 flex flex-wrap justify-center gap-4">
  <Button href="/projects">View Projects</Button>
  <Button href="/opensource" variant="secondary">
    Open Source
  </Button>
  <Button href="/contact" variant="ghost">
    Contact Me
  </Button>
</div>;

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

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/projects"
            className="
      px-6 py-3 rounded-lg font-medium
      bg-cyan-500 text-black
      transition-all duration-300
      hover:bg-cyan-400 hover:-translate-y-0.5
      focus:outline-none focus:ring-2 focus:ring-cyan-500/50
    "
          >
            View Projects
          </Link>

          <Link
            href="/opensource"
            className="
      px-6 py-3 rounded-lg font-medium
      border border-cyan-500 text-cyan-400
      transition-all duration-300
      hover:bg-cyan-500/10 hover:-translate-y-0.5
      focus:outline-none focus:ring-2 focus:ring-cyan-500/40
    "
          >
            Open Source
          </Link>

          <Link
            href="/contact"
            className="
      px-6 py-3 rounded-lg font-medium
      border border-gray-600 text-gray-300
      transition-all duration-300
      hover:border-gray-400 hover:text-white hover:-translate-y-0.5
      focus:outline-none focus:ring-2 focus:ring-gray-500/40
    "
          >
            Contact Me
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
