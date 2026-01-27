import { AvailabilityBlock, AvailabilityStatus } from "./availability";

export function buildCalendarContext(
  availabilityMap: Record<string, AvailabilityBlock>,
) {
  if (!availabilityMap || Object.keys(availabilityMap).length === 0) {
    return "No calendar availability data loaded yet.";
  }
  const unavailable = Object.values(availabilityMap)
    .filter((a) => a.status === AvailabilityStatus.Unavailable)
    .map((a) => `• ${a.date}: ${a.reason ?? "Unavailable"}`);

  if (unavailable.length === 0) {
    return "The candidate is fully available this month.";
  }

  return `
The candidate has the following unavailable dates:
${unavailable.join("\n")}

All other dates not listed are considered available.
`.trim();
}
