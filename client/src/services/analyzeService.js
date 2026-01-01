export async function analyzeText(text, platform = "general") {
  const response = await fetch("http://localhost:5001/api/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, platform })
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response.json();
}
