import request from "supertest";
import app from "../app.js";

describe("POST /api/analyze", () => {
    it("should return a 400 error if text is missing", async () => {
        const res = await request(app)
            .post("/api/analyze")
            .send({ platform: "linkedin" });

        expect(res.statusCode).toEqual(400);
        expect(res.body.message).toEqual("Text is required");
    });

    it("should return analysis results (fallback logic if no API key)", async () => {
        const res = await request(app)
            .post("/api/analyze")
            .send({ text: "I am very angry and hate my career", platform: "linkedin" });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty("sentiment");
        expect(res.body).toHaveProperty("riskLevel");
        expect(res.body).toHaveProperty("suggestions");
        expect(Array.isArray(res.body.suggestions)).toBe(true);
    });
});
