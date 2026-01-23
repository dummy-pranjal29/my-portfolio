"use client";

import { motion } from "framer-motion";

export default function GlassSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        relative mx-auto my-32 max-w-6xl
        rounded-3xl border border-white/10
        bg-white/5 backdrop-blur-xl
        shadow-[0_0_80px_rgba(34,211,238,0.08)]
        p-10
      "
    >
      {children}
    </motion.section>
  );
}
