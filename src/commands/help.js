module.exports = {
  name: "help",
  description: "Commande d'aide",
  execute(message, _, commands) {
    message.author.send(
      commands
        .map(
          (command) =>
            `**${process.env.COMMAND_TRIGGER}${command.name}** : ${command.description}`
        )
        .join("\n")
    );
  },
};
