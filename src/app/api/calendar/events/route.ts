import { NextResponse } from "next/server";
import { fetchCalendarEvents } from "@/integrations/google-calendar/googleCalendarClient";

export async function GET() {
  // Example: fetch current month
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();
  const end = new Date(now.getFullYear(), now.getMonth() + 1, 0).toISOString();

  try {
    const events = await fetchCalendarEvents(start, end);

    // TEMP: log server-side
    console.log("GOOGLE CALENDAR EVENTS:", events);

    return NextResponse.json({
      count: events.length,
      events,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch events" },
      { status: 500 },
    );
  }
}
