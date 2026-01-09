import { analyzeSentiment } from "../services/sentiment.service.js";
import { detectTopic } from "../services/topic.service.js";
import { detectEmotion } from "../services/emotion.service.js";
import { calculateRisk } from "../services/risk.service.js";
import { generateSuggestions } from "../services/suggestion.service.js";
import { analyzeContentWithAI } from "../services/ai.service.js";
import Analysis from "../models/Analysis.js";

export const analyzePost = async (req, res) => {
  try {
    const { text, platform = "general" } = req.body;

    if (!text || !text.trim()) return res.status(400).json({ message: "Text is required" });

    // Try AI analysis first
    let result;
    try {
      if (process.env.GEMINI_API_KEY) {
        result = await analyzeContentWithAI(text, platform);
      } else {
        throw new Error("No API key");
      }
    } catch (err) {
      console.warn("AI Analysis failed or missing API Key, falling back to local logic");
      const sentiment = analyzeSentiment(text);
      const topic = detectTopic(text);
      const emotion = detectEmotion(text);
      const risks = calculateRisk({ sentiment, topic, emotion }, platform);
      const suggestions = generateSuggestions(risks, platform);

      result = {
        sentiment,
        topic,
        emotion,
        riskLevel: risks.careerRisk,
        suggestions
      };
    }

    // Optional: save to DB
    // await Analysis.create({ text, platform, ...result });

    return res.json(result);
  } catch (err) {
    console.error("ANALYZE ERROR 👉", err);
    return res.status(500).json({ message: "Analysis failed" });
  }
};
