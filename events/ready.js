module.exports.run = async (client) => {
  console.log(`${client.user.tag} has logged in.`);
  client.user.setActivity(`${client.guilds.cache.size} Servers and ${client.projectsSize} Project(s)`, {
    type: "STREAMING",
    url: "https://www.twitch.tv/leo_zeey" 
  });
};
