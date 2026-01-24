import { NextResponse } from "next/server";
import Groq from "groq-sdk";
import { SYSTEM_PROMPT } from "@/lib/ai/systemPrompt";
import { PROFILE_DATA } from "@/data/profile";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",

      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "system", content: PROFILE_DATA },
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
