"use client";

import { format, addMonths, subMonths, isValid } from "date-fns";

interface MonthNavigatorProps {
  currentMonth: Date;
  onChange: (date: Date) => void;
}

export function MonthNavigator({
  currentMonth,
  onChange,
}: MonthNavigatorProps) {
  if (!(currentMonth instanceof Date) || !isValid(currentMonth)) {
    return null;
  }

  return (
    <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800">
      <button
        onClick={() => onChange(subMonths(currentMonth, 1))}
        className="text-zinc-400 hover:text-white"
      >
        ←
      </button>

      <span className="font-mono text-sm">
        {format(currentMonth, "MMMM yyyy")}
      </span>

      <button
        onClick={() => onChange(addMonths(currentMonth, 1))}
        className="text-zinc-400 hover:text-white"
      >
        →
      </button>
    </div>
  );
}
