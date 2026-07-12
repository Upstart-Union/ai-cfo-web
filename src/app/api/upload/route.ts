import { NextRequest, NextResponse } from "next/server";

const API_URL =
  process.env.API_URL ??
  "http://127.0.0.1:8000";

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const response = await fetch(
    `${API_URL}/upload/`,
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.text();

  return new NextResponse(data, {
    status: response.status,
    headers: {
      "Content-Type":
        response.headers.get("Content-Type") ??
        "application/json",
    },
  });
}
