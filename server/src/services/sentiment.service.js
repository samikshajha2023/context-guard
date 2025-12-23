import Sentiment from "sentiment";

const sentiment = new Sentiment();

export const analyzeSentiment = (text) => {
  const result = sentiment.analyze(text);

  if (result.score > 1) return "positive";
  if (result.score < -1) return "negative";
  return "neutral";
};
