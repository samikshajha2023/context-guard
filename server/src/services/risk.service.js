import { PLATFORM_RULES } from "../rules/platform.rules.js";

export const calculateRisk = ({ sentiment, topic, emotion }, platform) => {
  const rules = PLATFORM_RULES[platform];
  let careerRisk = "Low";
  let reputationRisk = "Low";

  if (rules.audience === "professional" && sentiment === "negative" && topic === "career") {
    careerRisk = "High";
  }

  if (emotion === "anger" || topic === "politics") {
    reputationRisk = "Medium";
  }

  return { careerRisk, reputationRisk };
};
