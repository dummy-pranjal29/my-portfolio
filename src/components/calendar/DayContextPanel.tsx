"use client";

import { format } from "date-fns";
import { mockAvailability } from "./mockAvailability";

interface DayContextPanelProps {
  selectedDate: string | null;
}

export function DayContextPanel({ selectedDate }: DayContextPanelProps) {
  if (!selectedDate) {
    return (
      <div className="mt-auto p-4 border-t border-zinc-800 text-sm text-zinc-400">
        Select a date to view availability
      </div>
    );
  }

  const availability = mockAvailability[selectedDate];
  const isBusy = availability?.status === "busy";

  return (
    <div className="mt-auto p-4 border-t border-zinc-800">
      <h3 className="text-sm font-semibold">
        {format(new Date(selectedDate), "MMMM d")}
      </h3>

      {isBusy ? (
        <p className="text-sm text-zinc-400 mt-1">
          Unavailable · {availability?.reason}
        </p>
      ) : (
        <div className="mt-3 space-y-2">
          <button className="w-full rounded-md bg-indigo-600 py-2 text-sm hover:bg-indigo-500">
            Propose a call
          </button>
          <button className="w-full rounded-md border border-zinc-700 py-2 text-sm hover:bg-zinc-800">
            Send invitation email
          </button>
        </div>
      )}
    </div>
  );
}
