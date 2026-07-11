export async function generateForecast(
  metrics: {
    revenue: number;
    expenses: number;
    profit: number;
    profit_margin: number;
  }
) {
  const response = await fetch(
    "/api/forecast",
    {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify(metrics),
    }
  );

  if (!response.ok) {
    throw new Error(
      "Forecast generation failed."
    );
  }

  return response.json();
}
