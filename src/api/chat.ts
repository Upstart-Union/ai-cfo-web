import type { DashboardMetrics } from "@/types/dashboard";

export async function sendMessage(
  message: string,
  dashboard?: DashboardMetrics | null
) {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
      dashboard,
    }),
  });

  if (!response.ok) {
    throw new Error("Chat failed");
  }

  return response.json();
}
