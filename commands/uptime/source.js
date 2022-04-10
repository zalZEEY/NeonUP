const { MessageEmbed } = require("discord.js");
const { sc } = require("./../../config.json");

module.exports = {
  name: "source",
  description: "Uptimer is an open-source project, and a free discord bot that allows you to make your projects online 24/7 just by using a single cmd.",
  category: "uptime",
  botPermission: [],
  authorPermission: [],
  ownerOnly: false,
  run: async (client, message, args) => {
    let github_repo = "https://discord.gg/93HNqfrpGB";

    let embed = new MessageEmbed()
      .setTitle("Invite Me / Support Me.")
      .setDescription(
        "Uptimer is a free discord bot that allows you to make your projects online 24/7 just by using a single cmd."
      )
      .addField(
        "<:link:807875763415416853> **Support**",
        "[Click here](" + github_repo + ") join support server."
      )
      .setTimestamp();

    return message.channel.send(embed);
  },
};
