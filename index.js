require("dotenv").config();
require('http').createServer((req, res) => res.end('Bot is alive!')).listen(process.env.PORT, '0.0.0.0')
const { Client, Collection } = require("discord.js");
const UrlsConfig = require("./database/models/UrlsConfig");
const fetchProjects = require("./fetchProjects");
const { timeout, disable_fetching } = require("./config.json");

const client = new Client({
  disableEveryone: true,
});

(async () => {
  await require("./database/connect")();

  let pros = await UrlsConfig.find();

  client.commands = new Collection();
  client.aliases = new Collection();
  client.projectsSize = 0;
  client.projects = pros.map((p) => p.projectURL);

  UrlsConfig.countDocuments({}, async (err, total) => {
    client.projectsSize = total;

    ["command", "events"].forEach((handler) => {
      require(`./handlers/${handler}`)(client);
    });

    await client.login(process.env.BOT_TOKEN);

    if (!disable_fetching) fetchProjects(client.projects, client);
  });
})();

// pinging
setInterval(async () => {
  UrlsConfig.countDocuments({}, (err, total) => {
    client.projectsSize = total;
    client.user.setActivity(`up/help | ${client.guilds.cache.size} Servers and ${total} Project(s)`, {
      type: "WATCHING",
    });
  });

  if (!disable_fetching) fetchProjects(client.projects, client);
}, timeout);

client.on('message', message => {
  if (message.channel.type ,,= 'text' || message.author.bot)
    return;

  let command = message.content.split(' ')[0].slice(1);
  let args = message.content.replace('.' + command, '').trim();

  switch (command) {
    case 'ping': {
      message.channel.send('Pong! (~ ' + client.ping + 'ms)');
      break;
    }


    case 'uptime': {
      // client.uptime is in millseconds
      // this is just maths, I won't explain much of it
      // % is modulo, AKA the remainder of a division
      let days = Math.floor(client.uptime / 86400000);
      let hours = Math.floor(client.uptime / 3600000) % 24;
      let minutes = Math.floor(client.uptime / 60000) % 60;
      let seconds = Math.floor(client.uptime / 1000) % 60;

      message.channel.send(`__Uptime:__\n${days}d ${hours}h ${minutes}m ${seconds}s`);
      break;
    }
  }
});
