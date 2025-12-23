import mongoose from "mongoose";

const AnalysisSchema = new mongoose.Schema(
  {
    text: String,
    platform: String,
    sentiment: String,
    topic: String,
    emotion: String,
    risks: Object
  },
  { timestamps: true }
);

export default mongoose.model("Analysis", AnalysisSchema);
