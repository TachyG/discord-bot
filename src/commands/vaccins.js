const puppeteer = require("puppeteer");
const Discord = require("discord.js");

const PATH = "./vaccins.png";

module.exports = {
  name: "vaccins",
  description:
    "Récupérer les données françaises sur le vaccins contre le Coronavirus COVID-19",
  async execute(message) {
    message.channel.send(
      "⬇️ Récupération des données en cours, veuillez patienter"
    );

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://covidtracker.fr/vaccintracker/", {
      waitUntil: "networkidle2",
    });

    // Taking screenshot
    await page.waitForSelector("#tableauVaccin");
    const table = await page.$("#tableauVaccin");
    await table.screenshot({ path: PATH });

    // Getting data
    await page.waitForSelector("#proportionVaccines");
    const percentageElement = await page.$("#proportionVaccines");
    const text = await page.evaluate(
      (element) => element.textContent,
      percentageElement
    );
    await browser.close();

    // Create the attachment using MessageAttachment
    const attachment = new Discord.MessageAttachment(PATH);
    // Send the attachment in the message channel
    message.channel.send(`${text}% de français vaccinés`, attachment);
  },
};
