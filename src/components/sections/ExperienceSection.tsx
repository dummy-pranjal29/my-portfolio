"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import GlassSection from "@/components/ui/GlassSection";

export default function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <GlassSection>
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold mb-12"
        >
          Experience
        </motion.h2>

        <div className="grid gap-6">
          {/* EXPERIENCE ITEM 1 */}
          <ExperienceCard
            index={0}
            openIndex={openIndex}
            toggle={toggle}
            logo="/logos/bluestock.jpg"
            company="Bluestock Fintech"
            role="SDE Intern"
            duration="November 2025 – December 2025"
          >
            Built and contributed to production-grade full-stack fintech systems
            supporting IPO discovery, analytics, and integrations across web and
            mobile platforms. Designed and implemented scalable backend services
            and RESTful APIs with a strong focus on performance, reliability,
            and clean system architecture. Developed an end-to-end machine
            learning–driven fundamental analysis pipeline by ingesting financial
            data via APIs, performing feature engineering and automated insight
            generation, and persisting results in MySQL for real-time analytics
            and decision-making.
          </ExperienceCard>

          {/* EXPERIENCE ITEM 2 */}
          <ExperienceCard
            index={1}
            openIndex={openIndex}
            toggle={toggle}
            logo="/logos/tata-steel.jpg"
            company="Tata Steel Pvt. Ltd."
            role="Data Science Intern"
            duration="July 2025 – September 2025"
          >
            Worked with large-scale manufacturing datasets to clean, prepare,
            and optimize data from multiple sources, significantly improving
            data usability and reducing preprocessing time. Built and refined
            machine learning models including XGBoost, LightGBM, and Random
            Forest for mill output prediction, achieving high predictive
            accuracy through extensive exploratory data analysis across numerous
            variables. Delivered data-driven insights to support operational and
            analytical decision-making in an enterprise production environment.
          </ExperienceCard>
        </div>
      </div>
    </GlassSection>
  );
}

/* ───────────────────────────────────────── */
/* INTERNAL COMPONENT (UPGRADED CARD)        */
/* ───────────────────────────────────────── */

function ExperienceCard({
  index,
  openIndex,
  toggle,
  logo,
  company,
  role,
  duration,
  children,
}: {
  index: number;
  openIndex: number | null;
  toggle: (index: number) => void;
  logo: string;
  company: string;
  role: string;
  duration: string;
  children: React.ReactNode;
}) {
  const isOpen = openIndex === index;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="
        cursor-pointer rounded-2xl
        border border-white/10
        bg-white/5 backdrop-blur-xl
        shadow-[0_0_40px_rgba(34,211,238,0.06)]
        hover:border-cyan-400/40
        transition
        p-6
      "
      onClick={() => toggle(index)}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div className="w-12 h-12 rounded-lg bg-black/40 flex items-center justify-center">
            <Image src={logo} alt={company} width={32} height={32} />
          </div>

          {/* Role + Company */}
          <div>
            <h3 className="text-lg font-medium">
              {role} — {company}
            </h3>
            <p className="text-sm text-gray-400">{duration}</p>
          </div>
        </div>

        {/* Toggle icon */}
        <span className="text-xl text-gray-400">{isOpen ? "−" : "+"}</span>
      </div>

      {/* Expanded content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.35 }}
            className="mt-6 text-gray-400 leading-relaxed"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
