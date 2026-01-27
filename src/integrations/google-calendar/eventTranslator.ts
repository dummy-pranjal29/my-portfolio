import { AvailabilityBlock } from "@/domain/calendar/availability";

/**
 * Convert raw Google Calendar events into
 * privacy-safe AvailabilityBlocks (day-level only).
 */
export function translateEventsToAvailability(
  events: any[],
): AvailabilityBlock[] {
  const blocksMap = new Map<string, AvailabilityBlock>();

  for (const event of events) {
    const start = event.start?.dateTime || event.start?.date;
    const end = event.end?.dateTime || event.end?.date;

    if (!start || !end) continue;

    const startDate = new Date(start);
    const endDate = new Date(end);

    // Normalize to day-level (YYYY-MM-DD)
    const current = new Date(startDate);

    while (current <= endDate) {
      const dateKey = current.toISOString().slice(0, 10);

      if (!blocksMap.has(dateKey)) {
        blocksMap.set(dateKey, {
          date: dateKey,
          status: "busy",
          reason: inferReason(event),
          source: "google",
          confidence: "derived",
        });
      }

      current.setDate(current.getDate() + 1);
    }
  }

  return Array.from(blocksMap.values());
}

/**
 * Infer a privacy-safe reason from event metadata.
 * NEVER return raw titles.
 */
function inferReason(event: any): AvailabilityBlock["reason"] {
  const text =
    `${event.summary ?? ""} ${event.description ?? ""}`.toLowerCase();

  if (text.includes("exam") || text.includes("test")) {
    return "Exam";
  }

  if (
    text.includes("travel") ||
    text.includes("flight") ||
    text.includes("trip")
  ) {
    return "Travel";
  }

  if (text.includes("personal")) {
    return "Personal";
  }

  return "Unavailable";
}
