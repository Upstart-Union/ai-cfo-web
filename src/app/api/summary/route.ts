import { NextRequest, NextResponse } from "next/server";

const API_URL =
  process.env.API_URL ??
  "http://127.0.0.1:8000";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const response = await fetch(
    `${API_URL}/ai/summary`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  const text = await response.text();

  console.log("===== FASTAPI RESPONSE =====");
  console.log("Status:", response.status);
  console.log(text);

  return new NextResponse(text, {
    status: response.status,
    headers: {
      "Content-Type":
        response.headers.get("Content-Type") ??
        "application/json",
    },
  });
}
