import { AvailabilityBlock, AvailabilityStatus } from "./availability";

export const mockAvailabilityBlocks: AvailabilityBlock[] = [
  {
    date: "2026-01-10",
    status: AvailabilityStatus.Unavailable,
    reason: "Exam",
    source: "manual",
    confidence: "high",
  },
  {
    date: "2026-01-18",
    status: AvailabilityStatus.Unavailable,
    reason: "Travel",
    source: "manual",
    confidence: "high",
  },
];
