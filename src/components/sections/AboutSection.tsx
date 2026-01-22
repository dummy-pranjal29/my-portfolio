"use client";

import { useState } from "react";
import EducationCard from "@/components/about/EducationCard";

export default function AboutSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>

        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mb-10">
          I’m a software developer who enjoys turning complex ideas into clean,
          reliable, and scalable systems. I’ve worked across full-stack and
          backend development, building modern web platforms with Next.js and
          React, designing RESTful APIs, and using Python for data processing,
          automation, and machine-learning workflows. I like understanding how
          systems behave under the hood and improving them with clarity,
          performance, and purpose. Outside of work, I enjoy travelling and
          exploring new places, listening to music, watching films, and spending
          time in the mountains. I’m also drawn to strategy-driven games like
          cricket and chess, which keep me sharp, patient, and thoughtful in how
          I approach problems.
        </p>

        {/* Education toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 text-cyan-400 font-medium hover:underline"
        >
          {open ? "Hide Education ▲" : "View Education ▼"}
        </button>

        {open && (
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <EducationCard
              title="Birla Institute of Technology, Mesra"
              level="B.Tech in Electrical & Electronics Engineering"
              score="CGPA: 7.5 / 10"
              duration="2022 – 2026"
              link="https://www.bitmesra.ac.in"
            />

            <EducationCard
              title="DAV Public School, Jamshedpur"
              level="Intermediate (Class XII)"
              score="Percentage: 91.2%"
              duration="2019 – 2021"
              link="https://davbistupur.org"
            />

            <EducationCard
              title="Rajendra Vidyalaya, Jamshedpur"
              level="Matriculation (Class X)"
              score="Percentage: 94.6%"
              duration="2018 – 2019"
              link="https://rajendravidyalaya.edu.in"
            />
          </div>
        )}
      </div>
    </section>
  );
}
