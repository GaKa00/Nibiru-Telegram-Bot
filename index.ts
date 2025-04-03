require('dotenv').config()
import ngrok from '@ngrok/ngrok'; 
import TelegramBot  from 'node-telegram-bot-api'; 
import express, { response } from 'express'; 
import { setupEventListeners } from './services/fluencr';


const app = express();
app.use(express.json());

const token: string = process.env.TELEGRAM_KEY|| (() => { throw new Error('environment variable "TELEGRAM_KEY" not defined'); })();
const bot = new TelegramBot(token, { webHook: true });
const chatId = process.env.CHAT_ID || '';



app.post(`/bot${token}`, (req, res) => {
    bot.processUpdate(req.body);
    res.sendStatus(200);
});

setupEventListeners(bot, chatId,)
  .then(() => console.log('All Fluencr event listeners started.'));



const PORT = 8085;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


ngrok.connect({ addr: PORT, authtoken_from_env: true })
  .then(async (listener) => {
    console.log(`Ingress established at: ${listener.url()}`);

    const telegramWebhookUrl = `https://api.telegram.org/bot${token}/setWebhook?url=${listener.url()}`;


fetch(telegramWebhookUrl)
.then(response => {
  if(!response){ throw new Error('Setting Telegram Webhook Failed')}
  return response.json()

}) 
.then(data => {
  console.log('Telegram webhook set Successfully', data)
})

  });