import openAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const AIClient = new openAI({
    apiKey: process.env.OPENAI_API_KEY
});

const response = await AIClient.responses.create({
    input: "Apple color is ?",
    model: "gpt-4o-mini",
    //messages: [{ role: "user", content: "Hello!" }]
});

//console.log(response); // it will give full response
console.log(response.output_text); // it will give only output
