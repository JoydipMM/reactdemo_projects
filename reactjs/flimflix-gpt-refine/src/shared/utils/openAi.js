import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_SECRATE_KEY,  dangerouslyAllowBrowser: true
});


export default openai;
