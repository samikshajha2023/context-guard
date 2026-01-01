export async function analyzeText(text, platform = "general") {
  const response = await fetch(`/api/analyze`, {  // relative URL
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, platform })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText);
  }

  return await response.json();
}
