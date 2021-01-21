module.exports = {
  name: "shouldWeWork",
  description: "Doit on travailler aujourd'hui ?",
  execute(message) {
    message.channel.send("The answer is no");
  },
};
