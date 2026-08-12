import openAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const AIClient = new openAI({
    apiKey: process.env.OPENAI_API_KEY
});

// const response = await AIClient.responses.create({
//     // add instructions to get more accurate result
//     instructions: "Give result in 30 words",
//     input: "Apple color is ?",
//     model: "gpt-4o-mini",
// });


const response = await AIClient.responses.create({
    input: [
        { role: "system", content: "answer in hinlish" },
        { role: "developer", content: "give a basic example of javascript" },
        { role: "user", content: "What is JavaScript?" },
    ],
    model: "gpt-4o-mini",
});

//console.log(response); // it will give full response
console.log(response.output_text); // it will give only output


/*
Role	                Purpose
system	                Defines the AI's overall behavior and rules
developer	            Defines application-level instructions and constraints
user	                The user's request/input
assistant	            The AI's previous response
*/
