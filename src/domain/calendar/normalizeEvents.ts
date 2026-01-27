import { calendar_v3 } from "googleapis";
import { addMinutes, parseISO, startOfDay } from "date-fns";
import { AvailabilityBlock, AvailabilityStatus } from "./availability";

type GoogleEvent = calendar_v3.Schema$Event;

export function normalizeCalendarEvents(
  events: GoogleEvent[],
): Record<string, AvailabilityBlock> {
  const availabilityMap: Record<string, AvailabilityBlock> = {};

  if (!Array.isArray(events) || events.length === 0) {
    console.warn("⚠️ normalizeCalendarEvents: no events received");
    return availabilityMap;
  }

  for (const event of events) {
    const reason = event.summary
      ? `Unavailable – ${event.summary}`
      : "Unavailable";

    const rawStart = event.start?.dateTime || event.start?.date;
    const rawEnd = event.end?.dateTime || event.end?.date;

    if (!rawStart || !rawEnd) continue;

    let start = parseISO(rawStart);
    let end = parseISO(rawEnd);

    // 🟡 All-day event handling (Google end date is exclusive)
    if (event.start?.date && event.end?.date) {
      start = startOfDay(start);
      end = startOfDay(end);
    }

    let cursor = start;

    while (cursor < end) {
      const key = cursor.toISOString(); // 🔑 SLOT-BASED KEY

      availabilityMap[key] = {
        date: key,
        status: AvailabilityStatus.Unavailable,
        reason,
        source: "google",
        confidence: "derived",
      };

      cursor = addMinutes(cursor, 30); // ⏱ 30-min slots
    }
  }

  console.log(
    "🧭 normalizeCalendarEvents → busy slots:",
    Object.keys(availabilityMap).length,
  );

  return availabilityMap;
}
