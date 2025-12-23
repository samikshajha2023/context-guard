import express from "express";
import { analyzePost } from "../controllers/analyze.controller.js";

const router = express.Router();

router.post("/", analyzePost);

export default router;
