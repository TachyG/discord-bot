// @ts-check
require("dotenv").config();
const fs = require("fs");

const Discord = require("discord.js");

const client = new Discord.Client();
const commands = new Discord.Collection();

fs.readdirSync("./src/commands/").forEach((file) => {
  const command = require(`./commands/${file}`);
  commands.set(command.name, command);
});

client.on("ready", () => {
  client.user
    .setActivity(`${process.env.COMMAND_TRIGGER}help`, { type: "LISTENING" })
    .catch((err) => console.error(err));
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async (message) => {
  if (!message.content.startsWith(process.env.COMMAND_TRIGGER)) return;
  const args = message.content
    .slice(process.env.COMMAND_TRIGGER.length)
    .split(/ +/);
  const commandName = args.shift().toLowerCase();

  if (!commands.has(commandName)) return;

  const command = commands.get(commandName);
  try {
    await command.execute(message, args, commands);
  } catch (error) {
    console.error(error);
    message.reply("oups, y a un soucis avec mon code");
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);
