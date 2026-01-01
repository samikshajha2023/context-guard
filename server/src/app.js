import express from "express";
import cors from "cors";
import analyzeRoutes from "./routes/analyze.routes.js";

const app = express();

// CORS setup
app.use(cors({
  origin: "http://localhost:3000", // your frontend
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

app.use("/api/analyze", analyzeRoutes);

export default app;
