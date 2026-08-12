import openAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const AIClient = new openAI({
    apiKey: process.env.OPENAI_API_KEY
});

const userPrompt = "How are you?";
const aiModel ="gpt-4o-mini";

async function aiAnswer (user_input) {
    const response = await AIClient.responses.create({
        input: user_input,
        model: aiModel,
    });
    console.log(response.output_text);
}

//aiAnswer();

// line print in terminal
process.stdout.write("Ask a Question:");
// run "node src/index.js" in terminal
// Ask a Question:

// to input data
// "data" -> trigger name. means when user press enter this "data" will trigger, then this function will run
process.stdin.on("data", (data)=>{
    //console.log(data); // this will return the input data in terminal in buffer format
    /*
    Ask a Question:how are you?
    <Buffer 68 6f 77 20 61 72 65 20 79 6f 75 3f 0d 0a>
    */
    //console.log(data.toString().trim()); // this will return the input data in terminal in string format
    const user_input = data.toString().trim(); // this will return the input data in terminal in string format

    // now we will call aiAnswer function and pass the input data, so that aiAnswer function can use the input data to generate response
    //aiAnswer(user_input);

    // to exit we need to close the process by using a condition
    if(user_input == "exit") {
        process.exit();
    }else{
        aiAnswer(user_input);
    }
    


}); // this process continues take input.


