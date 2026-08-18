import OpenAI from "openai";
import dotenv from "dotenv";
import { createReadStream, writeFileSync } from "fs";

dotenv.config();

const AIClient = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});
const aiModel = "whisper-1";

async function audioToText() {
    try {
        const response = await AIClient.audio.transcriptions.create({
            model: aiModel,
            file: createReadStream("./sample/sample-voice-01.mp3"),
            language: "en",
        });

        console.log(response.text);

        const saveText = writeFileSync("./converted/sample-voice-01.txt", response.text, "utf-8");
    } catch (error) {
        console.error(error);
    }
}

audioToText();