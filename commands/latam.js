const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.channel.id != "486681135619899412") return;
message.member.addRole(message.guild.roles.find("name", "Ranking"));
	message.member.addRole(message.guild.roles.find("name", "LATAM"));
	message.member.removeRole(message.guild.roles.find("name", "Starter"));
	message.author.send("Tu region a sido cambiada a LATAM");

  
}

module.exports.help = {
  name: "latam"
}
