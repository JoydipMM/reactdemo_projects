import OpenAI from "openai";
import dotenv from "dotenv";
import { writeFileSync } from "fs";

dotenv.config();

const AIClient = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const aiModel = "gpt-image-1";

async function generateImage() {
    try {
        const response = await AIClient.images.generate({
            model: aiModel,
            prompt: "Generate an image of a beautiful indian bengali girl",
            size: "1024x1024",
            n: 1
        });

        const raw_img = response.data[0].b64_json;
        // create buffer from raw image
        const RawImageBuffer = Buffer.from(raw_img, 'base64')
        const path = "./generated_img.png"

        writeFileSync(path, RawImageBuffer);

        console.log(response); // this will create the image in b64_json format
    } catch (error) {
        console.error(error);
    }
}

generateImage();