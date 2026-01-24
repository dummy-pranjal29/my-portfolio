"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PRESET_QUESTIONS = [
  "Give me a quick overview about Pranjal",
  "What roles is Pranjal looking for?",
  "Is Pranjal available for interviews this week?",
  "What are Pranjal's strongest skills?",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    { role: "user" | "ai"; text: string }[]
  >([]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const data = await res.json();

      setMessages((m) => [
        ...m,
        { role: "ai", text: data.reply || "I’ll help with that shortly." },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "ai",
          text: "Something went wrong. Please feel free to reach out directly.",
        },
      ]);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 rounded-full bg-cyan-500/90
        px-5 py-3 text-sm font-medium text-black
        shadow-lg shadow-cyan-500/30 hover:bg-cyan-400 transition"
      >
        Hey! How may I Help You?
      </button>

      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="
              fixed bottom-24 right-6 z-50
              w-[360px]
              rounded-2xl
              bg-black/80 backdrop-blur-xl
              border border-white/10
              shadow-2xl shadow-cyan-500/10
              overflow-hidden
            "
          >
            {/* Header */}
            <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-white">
                  AI Recruiter Assistant
                </p>
                <p className="text-xs text-gray-400">
                  Ask about skills, availability, or background
                </p>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-white transition"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="max-h-[280px] overflow-y-auto px-4 py-3 space-y-3 text-sm">
              {messages.length === 0 && (
                <div className="space-y-2">
                  <p className="text-gray-300">Quick questions you can ask:</p>

                  <div className="flex flex-wrap gap-2">
                    {PRESET_QUESTIONS.map((q) => (
                      <button
                        key={q}
                        onClick={() => sendMessage(q)}
                        className="
                          text-xs px-3 py-1.5 rounded-full
                          bg-white/5 text-gray-300
                          hover:bg-cyan-500/20 hover:text-white
                          transition
                        "
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`${
                    m.role === "user"
                      ? "text-right text-cyan-400"
                      : "text-left text-gray-200"
                  }`}
                >
                  <p className="inline-block max-w-[85%] leading-relaxed">
                    {m.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="border-t border-white/10 px-3 py-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendMessage(input);
                }}
                placeholder="Ask a question…"
                className="
                  w-full rounded-lg bg-white/5
                  px-3 py-2 text-sm
                  text-white placeholder:text-gray-500
                  outline-none focus:ring-1 focus:ring-cyan-500/50
                "
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
