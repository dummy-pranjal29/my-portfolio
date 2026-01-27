import { NextResponse } from "next/server";
import Groq from "groq-sdk";
import { SYSTEM_PROMPT } from "@/lib/ai/systemPrompt";
import { PROFILE_DATA } from "@/data/profile";
import { buildCalendarContext } from "@/domain/calendar/calendarContext";
import { getCachedAvailabilityMap } from "@/domain/calendar/cache";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // 1️⃣ Import calendar data from cache (already synced)
    const availabilityMap = await getCachedAvailabilityMap();

    // 2️⃣ Convert calendar data into AI-readable context
    const calendarContext = buildCalendarContext(availabilityMap);

    // 3️⃣ Compose the final system prompt dynamically
    const finalSystemPrompt = `
${SYSTEM_PROMPT}

--------------------
CANDIDATE PROFILE:
${PROFILE_DATA}

--------------------
CALENDAR AVAILABILITY (internal reference):
${calendarContext}
--------------------
`.trim();

    // 4️⃣ Send to Groq
    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: finalSystemPrompt },
        { role: "user", content: message },
      ],
      temperature: 0.3,
    });

    return NextResponse.json({
      reply: completion.choices[0]?.message?.content ?? "No response",
    });
  } catch (error) {
    console.error("Groq error:", error);
    return NextResponse.json(
      { reply: "Assistant temporarily unavailable." },
      { status: 200 },
    );
  }
}
