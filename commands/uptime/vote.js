const { MessageEmbed } = require("discord.js");
const { sc } = require("./../../config.json");
const { default_prefix } = require("./../../config.json");

module.exports = {
  name: "vote",
  description: "Vote me",
  category: "uptime",
  botPermission: [],
  authorPermission: [],
  ownerOnly: false,
  run: async (client, message, args) => {
    let github_repo = "https://discord.gg/mnQvdsZx5F";

    let embed = new MessageEmbed()
      .setTitle("Vote")
      .setDescription(
        "Vote me in top.gg"
      )
      .setColor("#a1eb34")
      .addField(
        "<:link:807875763415416853> **Top.gg**",
        "[Click here](" + github_repo + ") vote."
      )
      .setTimestamp();

    return message.channel.send(embed);
  },
};
