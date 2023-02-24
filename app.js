const express = require("express");
const { Telegraf } = require("telegraf");

const app = express();
app.use(express.json());
const token = "6183386477:AAFk0_tFPy8DffcE1t0ad1bIMvFk0jzKAVg";
const bot = new Telegraf(token);

// Handle start command
bot.start((ctx) => {
  ctx.reply(`Hi ${ctx.from.first_name}! Welcome to my bot!`);
});

// Handle text messages
bot.on("text", (ctx) => {
  const message = ctx.message.text;

  // Reply to user
  ctx.reply(`You said: ${message}`);
});

// Start bot polling
bot.launch();

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Bot running on port ${PORT}`);
});
