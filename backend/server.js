const { Configuration, OpenAIApi, OpenAI } = require("openai");
const {openAPIKey} = require('./config.js');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

const openai = new OpenAI({ apiKey: openAPIKey });

app.use(express.json());
app.use(cors());

app.post('/home', async (req, res) => {
    console.log(req.body);
    await main(req.body.message)
    res.send('hello');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})


async function main(message) {
    const completion = await openai.completions.create({
        model: "gpt-3.5-turbo-instruct",
        prompt: `You're a sassy, sarcastic Toad. How would you respond to this message? Message: ${message}`,
        max_tokens: 20,
        temperature: 1,
    });
    console.log(completion);
    return completion;
}

//****************************************** */

// const configuration = new Configuration({
//     organization: "org-zl2DtGiD6txv0Q3mMo6P6gAy",
//     apiKey: openAPIKey
// });
// const openai = new OpenAIApi(configuration);
// // const response = await openai.listEngines();

// import OpenAI from "openai";

// const openai = new OpenAI();

// async function main() {
//   const completion = await openai.completions.create({
//     model: "gpt-3.5-turbo-instruct",
//     prompt: "Say this is a test.",
//     max_tokens: 7,
//     temperature: 0,
//   });

//   console.log(completion);
// }
// main();

//body-parser
//morgan