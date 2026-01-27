"use client";

import {
  AvailabilityBlock,
  AvailabilityStatus,
} from "@/domain/calendar/availability";

interface DayContextPanelProps {
  date: string | null;
  availability?: AvailabilityBlock;
}

export function DayContextPanel({ date, availability }: DayContextPanelProps) {
  if (!date) {
    return (
      <div className="p-4 text-sm text-zinc-500">
        Select a date to see details.
      </div>
    );
  }

  const isUnavailable = availability?.status === AvailabilityStatus.Unavailable;

  /* ---------------- UNAVAILABLE DAY ---------------- */
  if (isUnavailable) {
    return (
      <div className="p-4 space-y-2 rounded-xl border border-white/10 bg-zinc-900">
        <div className="text-sm font-semibold text-red-400">Unavailable</div>

        <div className="text-xs text-zinc-400">
          {availability?.reason ?? "Already booked"}
        </div>
      </div>
    );
  }

  /* ---------------- AVAILABLE DAY ---------------- */
  return (
    <div className="p-4 space-y-2 rounded-xl border border-white/10 bg-zinc-900">
      <div className="text-sm font-semibold text-emerald-400">
        Available on {date}
      </div>

      <div className="text-xs text-zinc-400">
        No blocking events found for this date.
      </div>
    </div>
  );
}
