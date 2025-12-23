import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import analyzeRoutes from "./routes/analyze.routes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/analyze", analyzeRoutes);

export default app;
