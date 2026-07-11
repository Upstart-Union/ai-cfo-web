import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const response = await fetch(
    "http://127.0.0.1:8000/upload/",
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
