const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
if(message.channel.id === "486026246007029781") return;

if(message.channel.id === "486681135619899412") return;
		if(message.channel.id === "486681158348701697") return;

	let inviteEmbed = new Discord.RichEmbed()
	.addField("Invite Link", "https://discord.gg/ggPntHV")
	.setColor(6812512);
	
	message.channel.send(inviteEmbed);
  
}

module.exports.help = {
  name: "invite"
}
