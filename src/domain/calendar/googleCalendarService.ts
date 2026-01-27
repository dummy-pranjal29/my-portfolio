import { google } from "googleapis";
import fs from "fs";
import path from "path";

/**
 * Load Google OAuth refresh token from config file
 */
const authConfigPath = path.join(process.cwd(), "config/google-auth.json");

const authConfig = JSON.parse(fs.readFileSync(authConfigPath, "utf8"));

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

    oauth2Client.setCredentials({
      refresh_token: authConfig.refresh_token,
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
