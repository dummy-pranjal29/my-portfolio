import { google } from "googleapis";

/**
 * Fetch events from the user's Google Calendar (OAuth-based)
 */
export async function fetchCalendarEvents(timeMin: string, timeMax: string) {
  try {
    console.log("📅 Google Calendar fetch range:");
    console.log("   start:", timeMin);
    console.log("   end  :", timeMax);

    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI,
    );

    // ✅ SINGLE SOURCE OF TRUTH
    if (!process.env.GOOGLE_REFRESH_TOKEN) {
      throw new Error("GOOGLE_REFRESH_TOKEN is not set");
    }

    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
    });

    const calendar = google.calendar({
      version: "v3",
      auth: oauth2Client,
    });

    const response = await calendar.events.list({
      calendarId: "primary",
      timeMin,
      timeMax,
      singleEvents: true,
      orderBy: "startTime",
    });

    const events = response.data.items ?? [];

    console.log("📅 Google Calendar events fetched:", events.length);

    return events;
  } catch (error) {
    console.error("❌ Google Calendar fetch failed:", error);
    return [];
  }
}
