import { analyzeSentiment } from "../services/sentiment.service.js";
import { detectTopic } from "../services/topic.service.js";
import { detectEmotion } from "../services/emotion.service.js";
import { calculateRisk } from "../services/risk.service.js";
import { generateSuggestions } from "../services/suggestion.service.js";
import Analysis from "../models/Analysis.js";

export const analyzePost = async (req, res) => {
  try {
    const { text, platform } = req.body;

    const sentiment = analyzeSentiment(text);
    const topic = detectTopic(text);
    const emotion = detectEmotion(text);

    const risks = calculateRisk({ sentiment, topic, emotion }, platform);
    const suggestions = generateSuggestions(risks, platform);

    const result = await Analysis.create({
      text,
      platform,
      sentiment,
      topic,
      emotion,
      risks
    });

    res.json({ ...result.toObject(), suggestions });
  } catch (error) {
    res.status(500).json({ message: "Analysis failed" });
  }
};
