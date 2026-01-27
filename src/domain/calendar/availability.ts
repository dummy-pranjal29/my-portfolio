export enum AvailabilityStatus {
  Free = "free",
  Unavailable = "unavailable",
}

export type AvailabilitySource = "google" | "manual";
export type AvailabilityConfidence = "high" | "derived";

export interface AvailabilityBlock {
  date: string; // yyyy-MM-dd
  status: AvailabilityStatus;
  reason?: string;
  source: AvailabilitySource;
  confidence: AvailabilityConfidence;
}
