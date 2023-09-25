const express = require('express');
const cors = require('cors');
const chatWithAI = require('./openAI');
const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

app.post('/promptChat', async (req, res) => {
    let chatReq = req.body;
    let response = await chatWithAI(chatReq);
    res.json(response);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})