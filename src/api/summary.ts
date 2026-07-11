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

  console.log("Summary status:", response.status);

  const text = await response.text();

  console.log("Summary response:", text);

  if (!response.ok) {
    throw new Error(`Summary generation failed: ${text}`);
  }

  return JSON.parse(text);
}