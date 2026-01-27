"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HomeSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX - innerWidth / 2) / 30);
      mouseY.set((e.clientY - innerHeight / 2) / 30);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      className="
        relative min-h-screen bg-black text-white overflow-hidden
        flex items-center justify-center
        pointer-events-none
      "
    >
      {/* BACKGROUND */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 flex items-center justify-center md:justify-end pr-16"
      >
        <motion.div
          style={{ x: mouseX, y: mouseY }}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="relative"
        >
          <Image
            src="/avatar/anime-me.jpg"
            alt="Anime Avatar"
            width={560}
            height={560}
            priority
            className="select-none drop-shadow-[0_0_32px_rgba(34,211,238,0.18)]"
          />

          <motion.div
            style={{
              x: useTransform(mouseX, (v) => v * 1.2),
              y: useTransform(mouseY, (v) => v * 1.2),
            }}
            className="absolute inset-0 rounded-full blur-2xl bg-cyan-400/30"
          />
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 text-center px-6 pointer-events-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight">
          Aditya Pranjal
        </h1>

        <p className="mt-3 text-sm uppercase tracking-[0.35em] text-gray-400">
          Software Engineer
        </p>

        <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

        <h2 className="mx-auto mt-10 max-w-4xl text-3xl sm:text-4xl md:text-5xl font-medium text-gray-200">
          Building intelligent systems
          <span className="block mt-2 text-gray-400">
            with clarity &amp; purpose
          </span>
        </h2>

        <p className="mt-6 text-gray-400 text-lg max-w-xl mx-auto">
          Developer • Explorer • Problem Solver
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/projects"
            className="px-6 py-3 rounded-lg font-medium bg-cyan-500 text-black hover:bg-cyan-400 transition"
          >
            View Projects
          </Link>

          <Link
            href="/opensource"
            className="px-6 py-3 rounded-lg font-medium border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 transition"
          >
            Open Source
          </Link>

          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg font-medium border border-gray-600 text-gray-300 hover:text-white transition"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
