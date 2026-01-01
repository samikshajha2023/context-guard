export const TOPIC_KEYWORDS = {
  career: ["job", "corporate", "manager", "salary", "office"],
  politics: ["government", "election", "policy", "minister"],
  personal: ["life", "feeling", "mental", "tired"]
};

export const detectTopic = (text) => {
  const lowerText = text.toLowerCase();
  for (const topic in TOPIC_KEYWORDS) {
    for (const keyword of TOPIC_KEYWORDS[topic]) {
      if (lowerText.includes(keyword)) return topic;
    }
  }
  return "general";
};
