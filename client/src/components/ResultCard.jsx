import React from "react";

function ResultCard({ result }) {
  if (!result) return null;

  return (
    <div className="result-card">
      <h3>Analysis Result</h3>

      <p><strong>Risk Level:</strong> {result.riskLevel}</p>
      <p><strong>Sentiment:</strong> {result.sentiment}</p>
      <p><strong>Emotion:</strong> {result.emotion}</p>
      <p><strong>Topic:</strong> {result.topic}</p>

      <strong>Suggestions:</strong>
      <ul>
        {result.suggestions.map((s, index) => (
          <li key={index}>{s}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResultCard;
