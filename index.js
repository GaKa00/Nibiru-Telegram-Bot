const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
require('dotenv').config();

const app = express();
const token = process.env.TELEGRAM_KEY;
const bot = new TelegramBot(token, { polling: true });

app.get('/test', (req, res) => {
    bot.sendMessage('Bot is running!');
    res.send('Message sent!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
