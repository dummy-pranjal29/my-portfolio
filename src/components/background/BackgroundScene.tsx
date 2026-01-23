"use client";

import HomeAura from "./scenes/HomeAura";
import GridField from "./scenes/GridField";
import NetworkFlow from "./scenes/NetworkFlow";
import MemoryGlow from "./scenes/MemoryGlow";
import SignalFocus from "./scenes/SignalFocus";
import { motion } from "framer-motion";
import ExperienceField from "./scenes/ExperienceField";

export default function BackgroundScene({
  variant,
}: {
  variant:
    | "home"
    | "projects"
    | "opensource"
    | "about"
    | "contact"
    | "experience";
}) {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />

      {/* Noise */}
      <motion.div
        animate={{ opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute inset-0 bg-[url('/textures/noise.png')] mix-blend-overlay"
      />

      {variant === "home" && <HomeAura />}
      {variant === "projects" && <GridField />}
      {variant === "opensource" && <NetworkFlow />}
      {variant === "about" && <MemoryGlow />}
      {variant === "contact" && <SignalFocus />}
      {variant === "experience" && <ExperienceField />}
    </div>
  );
}
