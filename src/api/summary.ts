export async function generateSummary(metrics: {
  revenue: number;
  expenses: number;
  profit: number;
  profit_margin: number;
}) {
  const response = await fetch("/api/summary", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(metrics),
  });

  if (!response.ok) {
    throw new Error("Summary generation failed.");
  }

  return response.json();
}
