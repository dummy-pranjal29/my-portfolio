"use client";

import clsx from "clsx";
import { format } from "date-fns";
import {
  AvailabilityBlock,
  AvailabilityStatus,
} from "@/domain/calendar/availability";

interface CalendarDayCellProps {
  date: Date;
  dateKey: string;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  availability?: AvailabilityBlock;
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
  const isUnavailable = availability?.status === AvailabilityStatus.Unavailable;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => {
        onSelect(dateKey);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onSelect(dateKey);
        }
      }}
      className={clsx(
        "h-10 w-full rounded-md flex items-center justify-center text-sm font-mono relative cursor-pointer",
        "hover:bg-zinc-800 transition-colors",
        !isCurrentMonth && "text-zinc-600",
        isSelected && "ring-1 ring-indigo-500",
        isToday && "border border-indigo-400",
      )}
    >
      {format(date, "d")}

      <span
        className={clsx(
          "absolute bottom-1 h-1.5 w-1.5 rounded-full",
          isUnavailable ? "bg-red-400" : "bg-emerald-400",
        )}
      />
    </div>
  );
}
