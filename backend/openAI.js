const { OpenAI } = require("openai");
const {openAPIKey} = require('./config.js');

const openai = new OpenAI({ apiKey: openAPIKey });

async function chatWithAI(chatReq) {
    let {prompt,animal,qualities} = chatReq;

    prompt = `You're a funny, ${qualities} ${animal}. Concisely respond to my words: ${prompt}`;

    const completion = await openai.completions.create({
        model: "gpt-3.5-turbo-instruct",
        prompt: prompt,
        max_tokens: 35,
        temperature: 1,
    });

    return completion;
}

module.exports = chatWithAI;