// src/domain/calendar/availability.ts

export type AvailabilityStatus = "free" | "busy";

export type AvailabilityReason =
  | "Exam"
  | "Travel"
  | "Personal"
  | "Unavailable"
  | "Other";

export interface AvailabilityBlock {
  date: string; // YYYY-MM-DD
  status: AvailabilityStatus;
  reason?: AvailabilityReason;
  source: "manual" | "google";
  confidence: "high" | "derived";
}
