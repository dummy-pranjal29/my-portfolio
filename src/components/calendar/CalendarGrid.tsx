"use client";

import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  format,
  isSameMonth,
  isToday,
} from "date-fns";
import { CalendarDayCell } from "./CalendarDayCell";
import { AvailabilityBlock } from "@/domain/calendar/availability";

interface CalendarGridProps {
  visibleMonth: Date;
  selectedDate: string | null;
  availabilityMap: Record<string, AvailabilityBlock>;
  onSelectDate: (date: string) => void;
}

export function CalendarGrid({
  visibleMonth,
  selectedDate,
  availabilityMap,
  onSelectDate,
}: CalendarGridProps) {
  const start = startOfWeek(startOfMonth(visibleMonth));
  const end = endOfWeek(endOfMonth(visibleMonth));

  const days = eachDayOfInterval({ start, end });

  console.log("availabilityMap", availabilityMap);

  return (
    <div className="px-4">
      <div className="grid grid-cols-7 text-xs text-zinc-500 mb-2">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
          <div key={d} className="text-center">
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((day) => {
          const dateKey = format(day, "yyyy-MM-dd");
          const availability = availabilityMap[dateKey];

          return (
            <CalendarDayCell
              key={dateKey}
              date={day}
              dateKey={dateKey}
              isCurrentMonth={isSameMonth(day, visibleMonth)}
              isToday={isToday(day)}
              isSelected={selectedDate === dateKey}
              availability={availability}
              onSelect={onSelectDate}
            />
          );
        })}
      </div>
    </div>
  );
}
