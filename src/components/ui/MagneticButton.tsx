"use client";

import { motion, useMotionValue } from "framer-motion";

export default function MagneticButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <motion.button
      style={{ x, y }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left - rect.width / 2) * 0.2);
        y.set((e.clientY - rect.top - rect.height / 2) * 0.2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="px-6 py-3 rounded-xl bg-cyan-500 text-black font-medium"
    >
      {children}
    </motion.button>
  );
}
