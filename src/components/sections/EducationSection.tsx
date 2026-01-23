"use client";

import { motion } from "framer-motion";
import GlassSection from "@/components/ui/GlassSection";

export default function EducationSection() {
  return (
    <GlassSection>
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold mb-4"
        >
          Education
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 max-w-2xl mb-10"
        >
          Academic foundation and areas of focus that shaped my thinking.
        </motion.p>

        {/* Future-ready container for education cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Plug your EducationCard components here */}
        </div>
      </div>
    </GlassSection>
  );
}
