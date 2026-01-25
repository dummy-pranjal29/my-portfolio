import { AvailabilityBlock } from "./availability";

// Later this will be DB-backed
let inMemoryAvailability: AvailabilityBlock[] = [];

export const availabilityRepository = {
  getByDateRange(start: string, end: string): AvailabilityBlock[] {
    return inMemoryAvailability.filter((a) => a.date >= start && a.date <= end);
  },

  upsert(blocks: AvailabilityBlock[]) {
    const map = new Map<string, AvailabilityBlock>();

    for (const block of inMemoryAvailability) {
      map.set(block.date, block);
    }

    for (const block of blocks) {
      map.set(block.date, block);
    }

    inMemoryAvailability = Array.from(map.values());
  },

  clear() {
    inMemoryAvailability = [];
  },
};
