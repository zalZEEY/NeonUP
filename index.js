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
    client.user.setActivity(`${client.guilds.cache.size} Servers and ${total} Project(s)`, {
      type: "STREAMING",
      url: "https://www.twitch.tv/leo_zeey" 
    });
  });

  if (!disable_fetching) fetchProjects(client.projects, client);
}, timeout);
