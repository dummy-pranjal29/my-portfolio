"use client";

import Link from "next/link";
import { useState } from "react";
import { CalendarDrawer } from "@/components/calendar/CalendarDrawer";

export default function Navbar() {
  const [calendarOpen, setCalendarOpen] = useState<boolean>(false);

  const navItemClass =
    "text-sm font-medium text-zinc-300 hover:text-cyan-400 transition-colors font-sans";

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="text-sm font-semibold tracking-wide text-cyan-400 font-sans"
          >
            ME :)
          </Link>

          {/* Nav items */}
          <div className="flex items-center gap-7">
            <Link href="/about" className={navItemClass}>
              About
            </Link>
            <Link href="/projects" className={navItemClass}>
              Projects
            </Link>
            <Link href="/opensource" className={navItemClass}>
              Open Source
            </Link>
            <Link href="/experience" className={navItemClass}>
              Experience
            </Link>
            <Link href="/contact" className={navItemClass}>
              Contact
            </Link>

            <button
              onClick={() => setCalendarOpen(true)}
              className={navItemClass}
            >
              Calendar
            </button>
          </div>
        </div>
      </nav>

      <CalendarDrawer open={calendarOpen} onOpenChange={setCalendarOpen} />
    </>
  );
}
