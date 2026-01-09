import React from "react";

function ResultCard({ result }) {
  if (!result) return null;

  return (
    <div className="result-card">
      <h3>Analysis Report</h3>

      <div className="badges">
        <span className={`result-badge badge-${result.riskLevel?.toLowerCase()}`}>
          Risk: {result.riskLevel}
        </span>
        <span className="result-badge" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)' }}>
          {result.topic}
        </span>
      </div>

      <p style={{ marginTop: '1.5rem' }}>
        <strong>Sentiment:</strong> {result.sentiment} | <strong>Emotion:</strong> {result.emotion}
      </p>

      <div style={{ marginTop: '2rem' }}>
        <strong style={{ display: 'block', marginBottom: '1rem' }}>Recommendations:</strong>
        {result.suggestions.map((s, index) => (
          <div key={index} className="suggestion-item">
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResultCard;
