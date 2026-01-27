const TOKEN_URL = "https://oauth2.googleapis.com/token";
const CALENDAR_EVENTS_URL =
  "https://www.googleapis.com/calendar/v3/calendars/primary/events";

async function getAccessToken(): Promise<string> {
  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: process.env.GOOGLE_CLIENT_ID!,
      client_secret: process.env.GOOGLE_CLIENT_SECRET!,
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN!,
      grant_type: "refresh_token",
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    console.error("Access token error:", data);
    throw new Error("Failed to refresh access token");
  }

  return data.access_token as string;
}

export async function fetchCalendarEvents(timeMin: string, timeMax: string) {
  const accessToken = await getAccessToken();

  const params = new URLSearchParams({
    timeMin,
    timeMax,
    singleEvents: "true",
    orderBy: "startTime",
  });

  const res = await fetch(`${CALENDAR_EVENTS_URL}?${params.toString()}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    console.error("Calendar fetch error:", data);
    throw new Error("Failed to fetch calendar events");
  }

  return data.items ?? [];
}
