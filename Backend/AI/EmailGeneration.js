import { Router } from "express";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
export const router = Router();
dotenv.config();

router.post('/ai/EmailGeneration', async (req, res) => {
    console.log(req.body);
    const userInput = req.body.message;
    const ai = new GoogleGenAI({ apiKey: process.env.Gemeni_API_KEY });
    
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: userInput,
        });
        console.log(response.text);
        res.json({ reply: response.text });
    } catch (error) {
        console.error("Error generating content:", error);
        res.status(500).json({ error: "Failed to generate content" });
    }
})