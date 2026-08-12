import openAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const AIClient = new openAI({
    apiKey: process.env.OPENAI_API_KEY
});

const userPrompt = "How are you?";
const aiModel ="gpt-4o-mini";

const response = await AIClient.responses.create({
    input: [
        { role: "user", content: userPrompt },
    ],
    model: aiModel,
    // temperature: 2,
    max_output_tokens: 20, // how much tokens use to generate
    store: true // store use to save response in ID that can be used to get same response by ID for future 
});

/*
temperature range:
-------------------------------------
0.0 → more deterministic / focused
0.3 → focused
0.5 → balanced
0.7 → more creative
1.0 → more variable / creative
1.5  → more variation
2.0  → very high variation
*/

//console.log(response); // it will give only output. Here we get response ID 
console.log(response.output_text); // it will give only output
/*
{
    id: 'resp_064c7ab30b102607006a7c74fa35f881a394c7a9aa38549e02',
    output_text: "I'm just a program, but I'm here and ready to help you! How can I assist you today"
}
*/

// retrive old response by ID
const oldResponse = await AIClient.responses.retrieve("resp_064c7ab30b102607006a7c74fa35f881a394c7a9aa38549e02");
console.log(oldResponse);


