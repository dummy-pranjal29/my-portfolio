"use client";

import { useEffect, useRef, useState } from "react";
import type { AvailabilityBlock } from "@/domain/calendar/availability";

/* ---------------- TYPES ---------------- */

type Message = {
  role: "user" | "ai";
  text: string;
};

type ChatOpenDetail = {
  source?: "home" | "calendar";
  context?: {
    date?: string;
    availability?: AvailabilityBlock | null;
  };
};

type OpenSource = "home" | "calendar";

/* ---------------- CONSTANTS ---------------- */

const STORAGE_KEY = "chat_state_v1";

const HOME_PRESETS = [
  "Give me a quick overview about Pranjal",
  "What roles is Pranjal looking for?",
  "What are Pranjal's strongest skills?",
  "Can you summarize his recent projects?",
  "How can I contact Pranjal?",
];

/* ---------------- COMPONENT ---------------- */

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [openSource, setOpenSource] = useState<OpenSource | null>(null);
  const [calendarOpen, setCalendarOpen] = useState(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  /* ---------------- RESTORE STATE ---------------- */

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (!raw) return;

      const saved = JSON.parse(raw);
      setOpen(saved.open);
      setMinimized(saved.minimized);
      setMessages(saved.messages ?? []);
    } catch {}
  }, []);

  /* ---------------- PERSIST STATE ---------------- */

  useEffect(() => {
    sessionStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ open, minimized, messages }),
    );
  }, [open, minimized, messages]);

  /* ---------------- AUTO SCROLL ---------------- */

  useEffect(() => {
    if (!open || minimized) return;

    requestAnimationFrame(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    });
  }, [messages]);

  /* ---------------- CALENDAR STATE ---------------- */

  useEffect(() => {
    const onOpen = () => setCalendarOpen(true);
    const onClose = () => setCalendarOpen(false);

    window.addEventListener("calendar-opened", onOpen);
    window.addEventListener("calendar-closed", onClose);

    return () => {
      window.removeEventListener("calendar-opened", onOpen);
      window.removeEventListener("calendar-closed", onClose);
    };
  }, []);

  /* ---------------- OPEN FROM EVENTS ---------------- */

  useEffect(() => {
    const handler = (e: CustomEvent<ChatOpenDetail>) => {
      const prompt = buildPrompt(e.detail);
      openChat(prompt, "calendar");
    };

    window.addEventListener("open-chat", handler as EventListener);
    return () =>
      window.removeEventListener("open-chat", handler as EventListener);
  }, []);

  /* ---------------- PROMPT BUILDER ---------------- */

  const buildPrompt = (detail?: ChatOpenDetail): string | undefined => {
    if (detail?.source === "calendar" && detail.context?.date) {
      const { date, availability } = detail.context;

      if (!availability) {
        return `
You are a scheduling assistant.

The user is asking about availability on ${date}.
There are no calendar events on this date.

Explain clearly that the day appears fully available.
`;
      }

      return `
You are a scheduling assistant.

The user is asking about availability on ${date}.
Calendar data:
${JSON.stringify(availability, null, 2)}

Explain availability clearly and concisely.
`;
    }

    return undefined;
  };

  /* ---------------- OPEN / CLOSE ---------------- */

  const openChat = (prompt?: string, source: OpenSource = "home") => {
    setOpen(true);
    setMinimized(false);
    setLoading(false);
    setOpenSource(source);

    window.dispatchEvent(new Event("chat-opened"));

    if (source === "home") {
      setMessages([]);
      return;
    }

    if (prompt) {
      setMessages([]);
      sendMessage(prompt);
    }
  };

  const closeChat = () => {
    setOpen(false);
    setMinimized(false);
    setOpenSource(null);
    window.dispatchEvent(new Event("chat-closed"));
  };

  const minimizeChat = () => {
    setMinimized(true);
  };

  /* ---------------- SEND MESSAGE ---------------- */

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { role: "ai", text: data.reply ?? "No response received." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "AI service unavailable." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- RENDER ---------------- */

  return (
    <>
      {/* Floating Ask AI — hidden when calendar open */}
      {!open && !calendarOpen && (
        <button
          onClick={() => openChat(undefined, "home")}
          className="
            fixed bottom-6 right-6 z-[2147483647]
            rounded-full bg-cyan-400 text-black
            px-5 py-2.5 text-sm font-semibold shadow-lg
            font-inherit
          "
        >
          Hey! how may I help you?
        </button>
      )}

      {/* Minimized pill */}
      {open && minimized && (
        <button
          onClick={() => setMinimized(false)}
          className="
            fixed bottom-6 right-6 z-[2147483647]
            w-[220px] rounded-xl
            bg-zinc-900 border border-zinc-800
            px-4 py-2 text-sm text-zinc-200
            pointer-events-auto
          "
        >
          💬 Recruiter Assistant
        </button>
      )}

      {/* CHAT CONTAINER — ALWAYS pointer-events-auto */}
      <div
        className={`
          fixed bottom-20 right-6 z-[2147483647]
          w-[340px]
          overflow-hidden
          rounded-2xl
          bg-zinc-900 border border-zinc-800
          shadow-2xl
          pointer-events-auto
          transition-[opacity,max-height]
          duration-300 ease-out
          ${
            open && !minimized
              ? "opacity-100 max-h-[440px]"
              : "opacity-0 max-h-0"
          }
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
          <span className="text-sm font-medium text-zinc-200">
            Recruiter Assistant
          </span>
          <div className="flex gap-2">
            <button onClick={minimizeChat}>▁</button>
            <button onClick={closeChat}>✕</button>
          </div>
        </div>

        {/* Messages */}
        <div className="h-[340px] overflow-y-auto px-3 py-2 space-y-2 text-sm">
          {openSource === "home" && messages.length === 0 && !loading && (
            <div className="space-y-2">
              {HOME_PRESETS.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="w-full text-left rounded-lg bg-zinc-800 px-3 py-2 text-sm text-zinc-200 hover:bg-zinc-700"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {messages.map((m, i) => (
            <div
              key={i}
              className={m.role === "user" ? "text-right" : "text-left"}
            >
              <span
                className={`inline-block px-3 py-2 rounded-lg ${
                  m.role === "user"
                    ? "bg-blue-200 text-black"
                    : "bg-zinc-200 text-black"
                }`}
              >
                {m.text}
              </span>
            </div>
          ))}

          {loading && (
            <div className="text-xs text-zinc-500">AI is thinking…</div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="border-t border-zinc-800 p-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
            placeholder="Ask something…"
            className="w-full rounded-md bg-zinc-800 px-3 py-2 text-sm text-white outline-none"
          />
        </div>
      </div>
    </>
  );
}
