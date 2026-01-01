import express from "express";
import cors from "cors";
import analyzeRoutes from "./routes/analyze.routes.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// JSON parsing
app.use(express.json());

// Optional CORS for dev only
if (process.env.NODE_ENV !== "production") {
  app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET","POST","PUT","DELETE"],
    allowedHeaders: ["Content-Type"]
  }));
}

// API route
app.use("/api/analyze", analyzeRoutes);

// Serve React frontend in production
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, '../../client/build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../client/build', 'index.html'));
  });
}

export default app;
