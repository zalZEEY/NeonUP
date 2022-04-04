const { MessageEmbed } = require("discord.js");
const { default_prefix } = require("./../../config.json");

module.exports = {
  name: "help",
  description: "Shows all commands of the bot",
  category: "uptime",
  botPermission: [],
  authorPermission: [],
  ownerOnly: false,
  run: async (client, message, args) => {
    let github_repo = "https://discord.gg/ZuGMmk8cXR";
    let how_to = "https://discord.com/api/oauth2/authorize?client_id=958358276377042984&permissions=272448&scope=bot";
    let saweria = "https://saweria.co/ZeeyZal";
    let trakteer = "https://trakteer.id/zal_zeey";

    const commands = client.commands
      .filter((c) => c.ownerOnly === false)
      .map((cmd) => `**${default_prefix}${cmd.name}** - ${cmd.description}`);

    const contents =
      "**Uptimer** is a free discord bot that allows you to make your projects online 24/7 just by using a single cmd.\n\n" +
      commands.sort().join("\n");

    let embed = new MessageEmbed()
      .setTitle("<:database64:960279910117671012> Here are my comamnds!")
      .setDescription(contents)
      .setColor("RANDOM")
      .setFooter(`Prefix: "${default_prefix}"`)
      .setThumbnail(client.user.displayAvatarURL())
      .addField(
        "Invite?",
        "[Click here](" + how_to + ") Invite me to your server."
      )
      .addField(
        "Saweria",
        "[Click here](" + saweria + ") :)"
      )
      .addField(
        "Trakteer",
        "[Click here](" + trakteer + ") :)"
      )
      .addField(
        "Support",
        `[Click here](${github_repo}) join support server.`
      )
      .setTimestamp();

    return message.channel.send(embed);
  },
};
