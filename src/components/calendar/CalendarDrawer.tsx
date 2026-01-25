"use client";

import { format, startOfMonth, endOfMonth } from "date-fns";
import { useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { MonthNavigator } from "./MonthNavigator";
import { CalendarGrid } from "./CalendarGrid";
import { DayContextPanel } from "./DayContextPanel";

import { availabilityRepository } from "@/domain/calendar/availabilityRepository";
import { mockAvailabilityBlocks } from "@/domain/calendar/mockAvailabilityBlocks";
import { getAvailabilityMap } from "@/domain/calendar/selectors";

interface CalendarDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CalendarDrawer({ open, onOpenChange }: CalendarDrawerProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [visibleMonth, setVisibleMonth] = useState(new Date());

  const start = format(startOfMonth(visibleMonth), "yyyy-MM-dd");
  const end = format(endOfMonth(visibleMonth), "yyyy-MM-dd");

  const availabilityBlocks = availabilityRepository.getByDateRange(start, end);

  const availabilityMap = getAvailabilityMap(availabilityBlocks);

  useEffect(() => {
    availabilityRepository.clear();
    availabilityRepository.upsert(mockAvailabilityBlocks);
  }, []);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />

        <Dialog.Content className="fixed right-0 top-0 h-full w-full sm:w-[460px] bg-zinc-950 text-zinc-100 z-50 border-l border-zinc-800 flex flex-col">
          <header className="flex items-center justify-between p-4 border-b border-zinc-800">
            <Dialog.Title className="text-sm font-semibold">
              Availability
            </Dialog.Title>

            <Dialog.Close className="text-zinc-400 hover:text-white">
              ✕
            </Dialog.Close>
          </header>

          <MonthNavigator
            visibleMonth={visibleMonth}
            onChange={setVisibleMonth}
          />

          <CalendarGrid
            visibleMonth={visibleMonth}
            selectedDate={selectedDate}
            availabilityMap={availabilityMap}
            onSelectDate={setSelectedDate}
          />

          <DayContextPanel selectedDate={selectedDate} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
