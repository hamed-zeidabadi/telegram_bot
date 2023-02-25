const express = require("express");
const app = express();
const axios = require("axios");

const token = "5804892821:AAGztQFYuCfDCjIjqqfrYm9Gafm9G565bEY";

const { Bot } = require("grammy");

// Create an instance of the `Bot`
const bot = new Bot(token);

// Handle the /start command.
bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
// Handle other messages.
bot.on("message", (ctx) => ctx.reply("Got another message!"));
// Start the bot.
bot.start();

// Set up Express.js server
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Start App
app.listen(3000, () => {
  console.log("Local server started on port 3000");
});
