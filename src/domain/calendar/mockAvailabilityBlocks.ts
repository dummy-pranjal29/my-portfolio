import { AvailabilityBlock } from "./availability";

export const mockAvailabilityBlocks: AvailabilityBlock[] = [
  {
    date: "2026-01-10",
    status: "busy",
    reason: "Exam",
    source: "manual",
    confidence: "high",
  },
  {
    date: "2026-01-18",
    status: "busy",
    reason: "Travel",
    source: "manual",
    confidence: "high",
  },
];
