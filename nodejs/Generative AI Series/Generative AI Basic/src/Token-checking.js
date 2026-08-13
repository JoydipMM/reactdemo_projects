import openAI from "openai";
import dotenv from "dotenv";
dotenv.config();
import { encoding_for_model } from "tiktoken";

const AIClient = new openAI({
    apiKey: process.env.OPENAI_API_KEY
});

// const response = await AIClient.responses.create({
//     // add instructions to get more accurate result
//     instructions: "Give result in 30 words",
//     input: "Apple color is ?",
//     model: "gpt-4o-mini",
// });

const userPrompt = "What is JavaScript?";
const aiModel ="gpt-4o-mini";

const response = await AIClient.responses.create({
    input: [
        // { role: "system", content: "answer in hinlish" },
        { role: "system", content: "answer in 20 words only" },
        // { role: "developer", content: "give a basic example of javascript" },
        { role: "user", content: userPrompt },
    ],
    model: aiModel,
});
// https://platform.openai.com/tokenizer
console.log(response.usage); // it will give full response
console.log(response.output_text); // it will give only output

function calculateToken () {
    const encoder = encoding_for_model(aiModel);
    const tokensData = encoder.encode(userPrompt);
    console.log(tokensData);
}

calculateToken(); // Uint32Array(5) [ 4827, 382, 13114, 9991, 30 ]


