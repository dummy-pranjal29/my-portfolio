"use client";

import { format, parseISO } from "date-fns";

/* -------------------------------------------
   CONTACT CONFIG
-------------------------------------------- */
const CONTACT = {
  name: "Pranjal",
  email: "pranjal@example.com", // replace
  phone: "+919XXXXXXXXX", // replace
};

/* -------------------------------------------
   Premium Info Tooltip
-------------------------------------------- */
function PremiumInfoTooltip({ text }: { text: string }) {
  return (
    <div className="relative group flex items-center">
      {/* Icon */}
      <button
        type="button"
        aria-label="How invite works"
        className="
          flex h-7 w-7 items-center justify-center
          rounded-md
          text-zinc-400
          hover:text-zinc-200
          hover:bg-white/5
          transition
        "
      >
        {/* Minimal info icon (inline SVG) */}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </button>

      {/* Tooltip */}
      <div
        className="
          pointer-events-none
          absolute left-1/2 top-full z-50
          mt-3 w-[260px] -translate-x-1/2
          rounded-lg
          bg-zinc-900/95
          border border-white/10
          px-3 py-2
          text-xs text-zinc-200
          shadow-xl
          opacity-0 translate-y-1
          transition-all duration-200
          group-hover:opacity-100
          group-hover:translate-y-0
        "
      >
        <div className="font-medium text-zinc-100 mb-1">
          How scheduling works
        </div>
        <div className="leading-relaxed text-zinc-300">
          This opens Google Calendar using{" "}
          <span className="text-zinc-100">your account</span>. You can add me as
          a guest and send the invite.
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------
   Props
-------------------------------------------- */
interface DateActionPanelProps {
  date: string;
  onAskAI: () => void;
}

/* -------------------------------------------
   Component
-------------------------------------------- */
export function DateActionPanel({ date, onAskAI }: DateActionPanelProps) {
  const formattedDate = format(parseISO(date), "EEEE, MMMM d");

  /* -------------------------------------------
     Invite → Google Calendar
  -------------------------------------------- */
  const inviteForMeeting = () => {
    const start = `${date.replace(/-/g, "")}T100000`;
    const end = `${date.replace(/-/g, "")}T103000`;

    const url = new URL("https://calendar.google.com/calendar/render");
    url.searchParams.set("action", "TEMPLATE");
    url.searchParams.set("text", `Meeting with ${CONTACT.name}`);
    url.searchParams.set(
      "details",
      `Discussion regarding role, experience, and next steps.\n\nMy email: ${CONTACT.email}`,
    );
    url.searchParams.set("dates", `${start}/${end}`);

    window.open(url.toString(), "_blank", "noopener,noreferrer");
  };

  /* -------------------------------------------
     Call → tel:
  -------------------------------------------- */
  const makeCall = () => {
    window.location.href = `tel:${CONTACT.phone}`;
  };

  return (
    <div className="mt-4 rounded-xl border border-white/10 bg-zinc-900 p-4">
      <p className="mb-3 text-sm text-zinc-400">Actions for {formattedDate}</p>

      <div className="flex gap-3">
        {/* Ask AI */}
        <button
          onClick={onAskAI}
          className="
            flex-1 rounded-lg
            bg-white/5 px-3 py-2
            text-sm text-zinc-200
            hover:bg-white/10
            transition
          "
        >
          Ask AI
        </button>

        {/* Invite + premium info */}
        <div className="flex-1 flex items-center gap-1.5">
          <button
            onClick={inviteForMeeting}
            className="
              flex-1 rounded-lg
              bg-cyan-500/90 px-3 py-2
              text-sm font-medium text-black
              hover:bg-cyan-400
              transition
            "
          >
            Invite
          </button>

          <PremiumInfoTooltip text="This opens Google Calendar using your account. You can add me as a guest and send the invite." />
        </div>

        {/* Call */}
        <button
          onClick={makeCall}
          className="
            flex-1 rounded-lg
            bg-zinc-800 px-3 py-2
            text-sm text-zinc-200
            hover:bg-zinc-700
            transition
          "
        >
          Call
        </button>
      </div>
    </div>
  );
}
