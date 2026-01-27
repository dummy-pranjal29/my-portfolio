import { fetchCalendarEvents } from "@/integrations/google-calendar/googleCalendarClient";
import { translateEventsToAvailability } from "@/integrations/google-calendar/eventTranslator";
import { availabilityRepository } from "./availabilityRepository";

/**
 * Sync Google Calendar into availabilityRepository.
 * This is the ONLY place where Google meets domain logic.
 */
export async function syncGoogleCalendar(timeMin: string, timeMax: string) {
  // 1. Fetch raw events
  const events = await fetchCalendarEvents(timeMin, timeMax);

  // 2. Translate to availability blocks
  const availabilityBlocks = translateEventsToAvailability(events);

  // 3. Store in repository
  availabilityRepository.upsert(availabilityBlocks);

  return {
    eventsFetched: events.length,
    daysBlocked: availabilityBlocks.length,
  };
}
