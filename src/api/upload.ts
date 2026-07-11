export async function uploadFinancialReport(
  file: File
) {
  const formData = new FormData();

  formData.append("file", file);

  const response = await fetch(
    "/api/upload",
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    const text = await response.text();

    throw new Error(text);
  }

  return response.json();
}
