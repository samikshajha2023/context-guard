export const generateSuggestions = (risks, platform) => {
  const suggestions = [];

  if (risks.careerRisk === "High") {
    suggestions.push("Consider rewriting this post in a more neutral tone.");
    suggestions.push(`This content may not be suitable for ${platform}.`);
  }
  if (risks.reputationRisk !== "Low") {
    suggestions.push("You may want to delay posting or limit audience visibility.");
  }
  if (suggestions.length === 0) {
    suggestions.push("This content appears safe to post.");
  }

  return suggestions;
};
