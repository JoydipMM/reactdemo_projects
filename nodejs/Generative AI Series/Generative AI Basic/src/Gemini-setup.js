import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

const googleAi = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

const interaction = await googleAi.models.generateContent({
  model: "gemini-3.6-flash",
  contents: "Tell me five colors names",
});

console.log(interaction.text);
