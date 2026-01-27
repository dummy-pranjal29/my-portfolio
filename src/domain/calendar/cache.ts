import { AvailabilityBlock } from "./availability";

/**
 * Temporary in-memory cache.
 * Later you can replace this with Redis / KV / DB.
 */
let cachedAvailability: Record<string, AvailabilityBlock> = {};

export function setCachedAvailabilityMap(
  map: Record<string, AvailabilityBlock>,
) {
  cachedAvailability = map;
}

export async function getCachedAvailabilityMap() {
  return cachedAvailability;
}
