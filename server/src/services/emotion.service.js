import { EMOTION_KEYWORDS } from "../rules/emotion.rules.js";

export const detectEmotion = (text) => {
  const lowerText = text.toLowerCase();

  for (const emotion in EMOTION_KEYWORDS) {
    for (const keyword of EMOTION_KEYWORDS[emotion]) {
      if (lowerText.includes(keyword)) {
        return emotion;
      }
    }
  }

  return "neutral";
};
