const ngrok = require('@ngrok/ngrok');
const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { webHook: true });


app.post(`/bot${token}`, (req, res) => {
    bot.processUpdate(req.body);
    res.sendStatus(200);
});



const PORT = 8085;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


ngrok.connect({ addr: PORT, authtoken_from_env: true })
  .then(async (listener) => {
    console.log(`Ingress established at: ${listener.url()}`);

    const telegramWebhookUrl = `https://api.telegram.org/bot${token}/setWebhook?url=${listener.url()}`;

  });