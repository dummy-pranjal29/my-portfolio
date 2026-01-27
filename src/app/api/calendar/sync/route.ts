import { NextResponse } from "next/server";
import { fetchCalendarEvents } from "@/domain/calendar/googleCalendarService";
import { normalizeCalendarEvents } from "@/domain/calendar/normalizeEvents";
import { startOfMonth, endOfMonth } from "date-fns";
import { setCachedAvailabilityMap } from "@/domain/calendar/cache";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const month = body?.month ? new Date(body.month) : new Date();

    const events = await fetchCalendarEvents(
      startOfMonth(month).toISOString(),
      endOfMonth(month).toISOString(),
    );

    const availabilityMap = normalizeCalendarEvents(events);

    setCachedAvailabilityMap(availabilityMap);

    return NextResponse.json({
      availabilityMap,
    });
  } catch (err) {
    console.error("Calendar sync failed:", err);
    return NextResponse.json(
      { error: "Calendar sync failed" },
      { status: 500 },
    );
  }
}
