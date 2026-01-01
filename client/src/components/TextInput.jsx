import React, { useState } from "react";

function TextInput({ onAnalyze }) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text.trim()) return;
    onAnalyze(text);
  };

  return (
    <div>
      <textarea
        rows="6"
        placeholder="Paste text to analyze..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSubmit}>Analyze</button>
    </div>
  );
}

export default TextInput;
