"use client";

import { format, addMonths, subMonths } from "date-fns";

interface MonthNavigatorProps {
  visibleMonth: Date;
  onChange: (date: Date) => void;
}

export function MonthNavigator({
  visibleMonth,
  onChange,
}: MonthNavigatorProps) {
  return (
    <div className="flex items-center justify-between px-6 py-3">
      <button
        onClick={() => onChange(subMonths(visibleMonth, 1))}
        className="text-zinc-400 hover:text-white"
      >
        ◀
      </button>

      <span className="font-mono text-sm">
        {format(visibleMonth, "MMMM yyyy")}
      </span>

      <button
        onClick={() => onChange(addMonths(visibleMonth, 1))}
        className="text-zinc-400 hover:text-white"
      >
        ▶
      </button>
    </div>
  );
}
