"use client";

import clsx from "clsx";
import { format } from "date-fns";
import { MockAvailability } from "./mockAvailability";

interface CalendarDayCellProps {
  date: Date;
  dateKey: string;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  availability?: MockAvailability;
  onSelect: (date: string) => void;
}

export function CalendarDayCell({
  date,
  dateKey,
  isCurrentMonth,
  isToday,
  isSelected,
  availability,
  onSelect,
}: CalendarDayCellProps) {
  const isBusy = availability?.status === "busy";

  return (
    <button
      onClick={() => onSelect(dateKey)}
      aria-label={`Select ${dateKey}`}
      className={clsx(
        "h-10 w-full rounded-md flex items-center justify-center text-sm font-mono relative",
        "hover:bg-zinc-800",
        !isCurrentMonth && "text-zinc-600",
        isSelected && "ring-1 ring-indigo-500",
        isToday && "border border-indigo-400",
      )}
    >
      {format(date, "d")}

      <span
        className={clsx(
          "absolute bottom-1 h-1.5 w-1.5 rounded-full",
          isBusy ? "bg-red-400" : "bg-emerald-400",
        )}
      />
    </button>
  );
}
