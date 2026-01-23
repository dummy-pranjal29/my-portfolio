"use client";

import { motion } from "framer-motion";
import GlassSection from "@/components/ui/GlassSection";

export default function ContactSection() {
  return (
    <GlassSection>
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold mb-4"
        >
          Get in Touch
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 max-w-xl mx-auto mb-12"
        >
          I’m always open to discussing new opportunities, interesting projects,
          or collaborations around software engineering and AI.
        </motion.p>

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <ContactCard
            title="Email"
            value="adityapranjal29112001@gmail.com"
            link="mailto:adityapranjal29112001@gmail.com"
          />

          <ContactCard
            title="GitHub"
            value="github.com/dummy-pranjal29"
            link="https://github.com/dummy-pranjal29"
          />

          <ContactCard
            title="LinkedIn"
            value="linkedin.com/in/aditya-pranjal"
            link="https://www.linkedin.com/in/aditya-pranjal"
          />
        </div>
      </div>
    </GlassSection>
  );
}

/* 👇 INLINE COMPONENT — ENHANCED 👇 */
function ContactCard({
  title,
  value,
  link,
}: {
  title: string;
  value: string;
  link: string;
}) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -6, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="
        relative p-6 rounded-2xl
        border border-white/10
        bg-white/5 backdrop-blur-xl
        text-left
        shadow-[0_0_40px_rgba(34,211,238,0.08)]
        hover:border-cyan-400/40
        transition
        block
      "
    >
      {/* subtle glow layer */}
      <div
        className="
          pointer-events-none absolute inset-0 rounded-2xl
          bg-gradient-to-br from-cyan-400/10 to-transparent
          opacity-0 hover:opacity-100 transition
        "
      />

      <h3 className="relative z-10 text-lg font-semibold mb-2">{title}</h3>
      <p className="relative z-10 text-sm text-gray-400 break-all">{value}</p>
    </motion.a>
  );
}
