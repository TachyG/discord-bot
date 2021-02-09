const dayjs = require("dayjs");
const duration = require("dayjs/plugin/duration");
const relativeTime = require("dayjs/plugin/relativeTime");

dayjs.extend(duration);
dayjs.extend(relativeTime);

module.exports = {
  name: "comeback",
  description: "LE RETOUR",
  execute(message) {
    const COMEBACK = "2021-04-02";

    const leaverDuration = dayjs.duration(dayjs(COMEBACK).diff(dayjs()));
    const days = Math.ceil(leaverDuration.asDays());

    message.channel.send(
      `Madrock revient dans ${days} jour${days === 1 ? "" : "s"}`
    );
  },
};
