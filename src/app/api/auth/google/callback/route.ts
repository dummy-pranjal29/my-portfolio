import { NextRequest, NextResponse } from "next/server";

const TOKEN_URL = "https://oauth2.googleapis.com/token";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "Missing code" }, { status: 400 });
  }

  const tokenRes = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      code,
      client_id: process.env.GOOGLE_CLIENT_ID!,
      client_secret: process.env.GOOGLE_CLIENT_SECRET!,
      redirect_uri: process.env.GOOGLE_REDIRECT_URI!,
      grant_type: "authorization_code",
    }),
  });

  const tokenData = await tokenRes.json();
  console.log("GOOGLE_REFRESH_TOKEN:", tokenData.refresh_token);

  if (!tokenRes.ok) {
    return NextResponse.json(tokenData, { status: 500 });
  }

  if (!tokenData.refresh_token) {
    return NextResponse.json({
      success: false,
      error: "No refresh token received. Revoke access and retry.",
    });
  }

  // 🔴 COPY THIS TOKEN INTO .env
  console.log("✅ NEW GOOGLE REFRESH TOKEN:", tokenData.refresh_token);

  return NextResponse.json({
    success: true,
    message: "Google connected. You can close this tab.",
  });
}
