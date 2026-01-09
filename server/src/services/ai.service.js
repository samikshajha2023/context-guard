import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "YOUR_API_KEY_HERE");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const analyzeContentWithAI = async (text, platform) => {
  const prompt = `
    Analyze the following text for a post on ${platform}. 
    Return the result in JSON format with the following keys:
    - sentiment: (string: "positive", "negative", "neutral")
    - emotion: (string: e.g., "joy", "anger", "sadness", "neutral")
    - topic: (string: e.g., "technology", "politics", "career", "personal")
    - riskLevel: (string: "Low", "Medium", "High")
    - suggestions: (array of strings: actionable recommendations to improve the post's safety and impact)

    Text: "${text}"
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    let responseText = response.text();
    
    // Clean up response if it contains markdown markers
    if (responseText.startsWith("```json")) {
      responseText = responseText.replace(/```json|```/g, "").trim();
    }

    return JSON.parse(responseText);
  } catch (error) {
    console.error("Gemini AI Analysis Error:", error);
    throw new Error("AI Analysis failed");
  }
};
