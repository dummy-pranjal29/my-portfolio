import { AvailabilityBlock } from "./availability";

enum AvailabilityStatus {
  Unavailable = "unavailable",
  Available = "available",
  Busy = "busy",
  // Add more status values as needed
}

export const mockAvailabilityBlocks: AvailabilityBlock[] = [
  {
    date: "2026-01-10",
    status: AvailabilityStatus.Busy,
    reason: "Exam",
    source: "manual",
    confidence: "high",
  },
  {
    date: "2026-01-18",
    status: AvailabilityStatus.Busy,
    reason: "Travel",
    source: "manual",
    confidence: "high",
  },
];
