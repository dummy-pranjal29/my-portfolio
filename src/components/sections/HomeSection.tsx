"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import HeroIdentity from "@/components/hero/HeroIdentity";

export default function HomeSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;

      const x = (e.clientX - innerWidth / 2) / 30;
      const y = (e.clientY - innerHeight / 2) / 30;

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center"
    >
      {/* Avatar Background */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center md:justify-end pr-16"
      >
        <motion.div
          style={{ x: mouseX, y: mouseY }}
          animate={{ y: [0, -12, 0] }}
          transition={{
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          initial="idle"
          whileHover="hover"
          variants={{
            idle: {},
            hover: {},
          }}
          className="relative"
        >
          {/* Avatar Image */}
          <motion.div
            variants={{
              idle: { opacity: 0.84 },
              hover: { opacity: 0.92 },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Image
              src="/avatar/anime-me.jpg"
              alt="Anime Avatar"
              width={560}
              height={560}
              priority
              className="select-none
        drop-shadow-[0_0_50px_rgba(34,211,238,0.28)]"
            />
          </motion.div>

          {/* Glow — calm, supporting, non-dominant */}
          <motion.div
            variants={{
              idle: { opacity: 0.22 },
              hover: { opacity: 0.32 },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              x: useTransform(mouseX, (v) => v * 1.4),
              y: useTransform(mouseY, (v) => v * 1.4),
            }}
            className="absolute inset-0 rounded-full blur-2xl bg-cyan-400"
          />
        </motion.div>
      </motion.div>

      {/* Dark overlay — slightly lighter now */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Foreground Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 text-center px-6"
      >
        {/* NAME */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="
      text-5xl sm:text-6xl md:text-7xl
      font-semibold tracking-tight
      text-white
    "
        >
          Aditya Pranjal
        </motion.h1>

        {/* ROLE LINE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="
      mt-3
      text-sm sm:text-base
      uppercase tracking-[0.35em]
      text-gray-400
    "
        >
          Software Engineer
        </motion.p>

        {/* DIVIDER */}
        <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

        {/* VALUE STATEMENT */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="
    mx-auto
    mt-10
    max-w-4xl
    text-center
    text-3xl sm:text-4xl md:text-5xl
    font-medium
    leading-snug
    tracking-normal
    text-gray-200
    font-sans
  "
        >
          <span className="block">Building intelligent systems</span>

          <span className="block mt-2 text-gray-400">
            with clarity &amp; purpose
          </span>
        </motion.h2>

        <p className="mt-6 text-gray-400 text-lg max-w-xl mx-auto">
          Developer • Explorer • Problem Solver
        </p>

        {/* CTA */}
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
      </motion.div>
    </section>
  );
}
