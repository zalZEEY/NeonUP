const { MessageEmbed } = require("discord.js");
const { sc } = require("./../../config.json");
const { default_prefix } = require("./../../config.json");

module.exports = {
  name: "source",
  description: "Open source",
  category: "uptime",
  botPermission: [],
  authorPermission: [],
  ownerOnly: false,
  run: async (client, message, args) => {
    let github_repo = "https://discord.gg/mnQvdsZx5F";

    let embed = new MessageEmbed()
      .setTitle("Source / Support")
      .setDescription(
        "Uptimer is a free discord bot that allows you to make your projects online 24/7 just by using a single cmd."
      )
      .setColor("#a1eb34")
      .addField(
        "<:link:807875763415416853> **Github**",
        "[Click here](" + sc + ") source."
      )
      .addField(
        "<:link:807875763415416853> **Discord**",
        "[Click here](" + github_repo + ") discord server."
      )
      .setTimestamp();

    return message.channel.send(embed);
  },
};
