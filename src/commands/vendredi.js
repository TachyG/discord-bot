module.exports = {
  name: "vendredi",
  description: "Nous sommes vendredi",
  execute(message) {
    const isFriday = new Date().getDay() == 5;
    const fridayFile =
      "https://cdn.discordapp.com/attachments/689404557024952364/840242347317133362/getvideobot.com-i10sxdnO5-HeB9Y4.mp4";
    const notFridayFile =
      "https://cdn.discordapp.com/attachments/689404557024952364/848939595386454088/getvideobot.com-VYkcvJo20mRjKobv.mp4";

    message.channel
      .send({
        files: [isFriday ? fridayFile : notFridayFile],
      })
      .catch(console.error);
  },
};
