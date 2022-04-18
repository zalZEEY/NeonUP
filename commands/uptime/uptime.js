const UrlsConfig = require("./../../database/models/UrlsConfig");
const { MessageEmbed } = require("discord.js");
const { default_prefix } = require("./../../config.json");
require("moment-duration-format");

module.exports = {
    name: 'uptime',
    description: "Bot Stats",
    execute(message, args){ 
        const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        const statEmbed = new Discord.RichEmbed()
            .setTitle("**  = STATISTICS =**")
            .addField("**Mem Usage  ::**", `**${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB**`)
            .addField("**Uptime**", `**${duration}**`);
        message.channel.send(statEmbed);
    }
}
