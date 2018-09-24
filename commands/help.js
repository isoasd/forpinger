
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
if(message.channel.id === "486026246007029781") return;
	if(message.channel.id === "486681135619899412") return;
		if(message.channel.id === "486681158348701697") return;

	let helpEmbed = new Discord.RichEmbed()
	.addField("Commands", "User Commands", true)
	.addField("Other", "Commands", true)
    	.addField("!help", "Help Command", true)
   	.addField("!invite", "Makes Invite", true)
    	.addField("!report", "Report player", true)
    	.addField("!info", "Show Info", true)
    	.addField("!fn", "Tracks a user")
	.setFooter("You executed the !help command with ScrimBot!")
   	.setColor(6812512);

	message.channel.sendEmbed(helpEmbed);
  
}

module.exports.help = {
  name: "help"
}
