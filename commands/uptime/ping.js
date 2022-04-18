const UrlsConfig = require("./../../database/models/UrlsConfig");
const { MessageEmbed } = require("discord.js");
const { default_prefix } = require("./../../config.json");

module.exports = {
  name: "ping",
  category: "uptime",
  description: "Get bot ping :/",
  usage: "ping",
  run: (client, message) => {
    message.channel.send(`**:ping_pong:Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms.:ping_pong:**`);
  }
  
}

