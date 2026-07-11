import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const response = await fetch(
    "http://127.0.0.1:8000/ai/chat",
    {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify(body),
    }
  );

  const data = await response.text();

  return new NextResponse(data,{
    status: response.status,
    headers:{
      "Content-Type":
        response.headers.get("Content-Type") ??
        "application/json",
    },
  });
}
