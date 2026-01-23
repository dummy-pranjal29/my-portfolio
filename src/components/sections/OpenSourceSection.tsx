"use client";

import { motion } from "framer-motion";
import GlassSection from "@/components/ui/GlassSection";
import OpenSourceCard from "@/components/opensource/OpenSourceCard";

export default function OpenSourceSection() {
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
          Open Source
        </motion.h2>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <OpenSourceCard
            project="vscode-icons"
            contribution="Open Source Contributor"
            description="Contributed improvements to the VS Code Icons project, enhancing icon mappings and developer experience for VS Code users."
            link="https://github.com/dummy-pranjal29/vscode-icons"
          />
        </motion.div>
      </div>
    </GlassSection>
  );
}
