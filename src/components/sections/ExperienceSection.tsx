"use client";

import { useState } from "react";
import Image from "next/image";

export default function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-12">Experience</h2>

        <div className="grid gap-6">
          {/* Bluestock Fintech */}
          <div
            onClick={() => toggle(0)}
            className="cursor-pointer rounded-xl border border-gray-700 bg-neutral-900/60 p-6 transition hover:border-gray-500 hover:bg-neutral-900"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* Logo */}
                <div className="w-12 h-12 rounded-md bg-neutral-800 flex items-center justify-center">
                  <Image
                    src="/logos/bluestock.png"
                    alt="Bluestock Fintech"
                    width={32}
                    height={32}
                  />
                </div>

                {/* Company + Role */}
                <div>
                  <h3 className="text-lg font-medium">
                    SDE Intern — Bluestock Fintech
                  </h3>
                  <p className="text-sm text-gray-400">
                    November 2025 – December 2025
                  </p>
                </div>
              </div>

              <span className="text-gray-400">
                {openIndex === 0 ? "−" : "+"}
              </span>
            </div>

            {/* Expanded content */}
            {openIndex === 0 && (
              <div className="mt-6 text-gray-400 leading-relaxed">
                Built and contributed to production-grade full-stack fintech
                systems supporting IPO discovery, analytics, and integrations
                across web and mobile platforms. Designed and implemented
                scalable backend services and RESTful APIs with a strong focus
                on performance, reliability, and clean system architecture.
                Developed an end-to-end machine learning–driven fundamental
                analysis pipeline by ingesting financial data via APIs,
                performing feature engineering and automated insight generation,
                and persisting results in MySQL for real-time analytics and
                decision-making.
              </div>
            )}
          </div>

          {/* Tata Steel */}
          <div
            onClick={() => toggle(1)}
            className="cursor-pointer rounded-xl border border-gray-700 bg-neutral-900/60 p-6 transition hover:border-gray-500 hover:bg-neutral-900"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* Logo */}
                <div className="w-12 h-12 rounded-md bg-neutral-800 flex items-center justify-center">
                  <Image
                    src="/logos/tata-steel.png"
                    alt="Tata Steel"
                    width={32}
                    height={32}
                  />
                </div>

                {/* Company + Role */}
                <div>
                  <h3 className="text-lg font-medium">
                    Data Science Intern — Tata Steel Pvt. Ltd.
                  </h3>
                  <p className="text-sm text-gray-400">
                    July 2025 – September 2025
                  </p>
                </div>
              </div>

              <span className="text-gray-400">
                {openIndex === 1 ? "−" : "+"}
              </span>
            </div>

            {/* Expanded content */}
            {openIndex === 1 && (
              <div className="mt-6 text-gray-400 leading-relaxed">
                Worked with large-scale manufacturing datasets to clean,
                prepare, and optimize data from multiple sources, significantly
                improving data usability and reducing preprocessing time. Built
                and refined machine learning models including XGBoost, LightGBM,
                and Random Forest for mill output prediction, achieving high
                predictive accuracy through extensive exploratory data analysis
                across numerous variables. Delivered data-driven insights to
                support operational and analytical decision-making in an
                enterprise production environment.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
