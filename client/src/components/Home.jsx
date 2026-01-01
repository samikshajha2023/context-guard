import React, { useState } from "react";
import TextInput from "./TextInput";
import ResultCard from "./ResultCard";
import { analyzeText } from "../services/analyzeService";

function Home() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async (text) => {
    setLoading(true);
    try {
      const data = await analyzeText(text);
      setResult(data);
    } catch (err) {
      alert("Failed to analyze text");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🌟 Context Guard</h1>
        <p className="subheading">Analyze content risk before posting</p>

        <TextInput onAnalyze={handleAnalyze} />

        {loading && <p className="loading">Analyzing...</p>}

        <ResultCard result={result} />
      </header>
    </div>
  );
}

export default Home;
