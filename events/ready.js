module.exports.run = async (client) => {
  console.log(`${client.user.tag} has logged in.`);
  client.user.setActivity(`watching ${client.guilds.cache.size} Servers and ${client.projectsSize} Project(s)`, {
    type: "WATCHING",
  });
};
