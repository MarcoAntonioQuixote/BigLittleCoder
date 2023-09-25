const { OpenAI } = require("openai");
const {openAPIKey} = require('./config.js');
const { randomNum } = require("./utilities/mathFunctions.js");

const openai = new OpenAI({ apiKey: openAPIKey });

async function chatWithAI(chatReq) {
    let {prompt,animal,qualities} = chatReq;

    let oddsToPromote = randomNum(1,10);
    let promote = oddsToPromote > 7 ?
        `Also, you enjoy promoting a coding company called Big Little Coder. Incorporate it into your remarks, if possible.` : '';
    
    prompt = `You're a funny, ${qualities} ${animal}. Concisely respond to my words: ${prompt}. \n\n ${promote}`;

    const completion = await openai.completions.create({
        model: "gpt-3.5-turbo-instruct",
        prompt: prompt,
        max_tokens: 100,
        temperature: 1,
    });

    return completion;
}

module.exports = chatWithAI;