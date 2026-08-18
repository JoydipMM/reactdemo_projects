import OpenAI from "openai";
import dotenv from "dotenv";
import { createReadStream, writeFileSync } from "fs";

dotenv.config();

const AIClient = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});
const aiModel = "gpt-4o-mini-tts";

async function audioToText() {
    try {
        const response = await AIClient.audio.speech.create({
            model: aiModel,
            input: "How are you?",
            voice: "shimmer",
            /* voice: 'alloy', 'echo', 'fable', 'onyx', 'nova', 'shimmer', 'coral', 'verse', 'ballad', 'ash', 'sage', 'marin', and 'cedar' */
            language: "en",
        });

        const baseResponse = await response.arrayBuffer();
        /*
        ArrayBuffer {
            [Uint8Contents]: <ff f3 c4 c4 00 00 00 03 48 00 00 00 00 4c 41 4d 45 33 2e 31 30 30 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 0000 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 ... 29468 more bytes>,
            byteLength: 29568
        }
        */
       
       console.log(baseResponse);
       writeFileSync("./converted/generated-voice-01.mp3", Buffer.from(baseResponse));

    } catch (error) {
        console.error(error);
    }
}

audioToText();