"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { MonthNavigator } from "./MonthNavigator";
import { CalendarGrid } from "./CalendarGrid";
import { AvailabilityBlock } from "@/domain/calendar/availability";
import { DayContextPanel } from "./DayContextPanel";
import { DateActionPanel } from "./DateActionPanel";

interface CalendarDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CalendarDrawer({ open, onOpenChange }: CalendarDrawerProps) {
  const [visibleMonth, setVisibleMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [availabilityMap, setAvailabilityMap] = useState<
    Record<string, AvailabilityBlock>
  >({});
  const [chatOpen, setChatOpen] = useState(false);

  /* ---------------- CALENDAR LIFECYCLE ---------------- */
  useEffect(() => {
    if (open) {
      window.dispatchEvent(new Event("calendar-opened"));
    } else {
      window.dispatchEvent(new Event("calendar-closed"));
    }
  }, [open]);

  /* ---------------- CHAT LIFECYCLE ---------------- */
  useEffect(() => {
    const onChatOpen = () => setChatOpen(true);
    const onChatClose = () => setChatOpen(false);

    window.addEventListener("chat-opened", onChatOpen);
    window.addEventListener("chat-closed", onChatClose);

    return () => {
      window.removeEventListener("chat-opened", onChatOpen);
      window.removeEventListener("chat-closed", onChatClose);
    };
  }, []);

  /* ---------------- FETCH AVAILABILITY ---------------- */
  useEffect(() => {
    if (!open) return;

    fetch("/api/calendar/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ month: visibleMonth.toISOString() }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data?.availabilityMap) return;
        const normalized: Record<string, AvailabilityBlock> = {};
        Object.entries(data.availabilityMap).forEach(([k, v]) => {
          normalized[k.slice(0, 10)] = v as AvailabilityBlock;
        });
        setAvailabilityMap(normalized);
      });
  }, [open, visibleMonth]);

  /* ---------------- ASK AI ---------------- */
  const handleAskAI = (date: string) => {
    const availability = availabilityMap[date] ?? null;

    window.dispatchEvent(
      new CustomEvent("open-chat", {
        detail: {
          source: "calendar",
          context: { date, availability },
        },
      }),
    );
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        {/* 🔑 OVERLAY */}
        <Dialog.Overlay
          className={`
            fixed inset-0 bg-black/40 z-40
            ${chatOpen ? "pointer-events-none" : ""}
          `}
        />

        {/* 🔑 CONTENT */}
        <Dialog.Content
          className={`
            fixed right-0 top-0 h-full w-full sm:w-[460px]
            bg-zinc-950 text-zinc-100
            z-50 border-l border-zinc-800
            flex flex-col
            transition-all duration-200
            ${chatOpen ? "blur-sm brightness-75 pointer-events-none" : ""}
          `}
        >
          <header className="flex items-center justify-between p-4 border-b border-zinc-800">
            <h2 className="text-sm font-semibold">Availability</h2>
            <Dialog.Close className="text-zinc-400 hover:text-white">
              ✕
            </Dialog.Close>
          </header>

          <MonthNavigator
            currentMonth={visibleMonth}
            onChange={setVisibleMonth}
          />

          <CalendarGrid
            visibleMonth={visibleMonth}
            selectedDate={selectedDate}
            availabilityMap={availabilityMap}
            onSelectDate={setSelectedDate}
          />

          {selectedDate && (
            <DateActionPanel
              date={selectedDate}
              onAskAI={() => handleAskAI(selectedDate)}
              // onProposeMeeting={() => alert("Meeting coming 👀")}
              // onMakeCall={() => alert("Call coming 📞")}
            />
          )}

          <DayContextPanel
            date={selectedDate}
            availability={
              selectedDate ? availabilityMap[selectedDate] : undefined
            }
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
