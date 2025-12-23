import { TOPIC_KEYWORDS } from "../rules/topic.rules.js";

export const detectTopic = (text) => {
  const lowerText = text.toLowerCase();

  for (const topic in TOPIC_KEYWORDS) {
    for (const keyword of TOPIC_KEYWORDS[topic]) {
      if (lowerText.includes(keyword)) {
        return topic;
      }
    }
  }

  return "general";
};
