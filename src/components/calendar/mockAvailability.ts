export type MockAvailability = {
  status: "free" | "busy";
  reason?: string;
};

export const mockAvailability: Record<string, MockAvailability> = {
  "2026-01-10": { status: "busy", reason: "Exam" },
  "2026-01-18": { status: "busy", reason: "Travel" },
  "2026-01-25": { status: "busy", reason: "Personal commitment" },
};
