const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 if(!message.member.roles.find(r => r.name === "Scrim Staff")) return;
 
 let scrimlast3chan = message.guild.channels.find(`name`, "scrim-last3");
		scrimlast3chan.overwritePermissions(message.guild.id, {
	SEND_MESSAGES: false
	})
	scrimlast3chan.send("*Chat is now unlocked!*");
	let nficon = bot.user.displayAvatarURL;
	let negicon = message.author.displayAvatarURL;
	let todaysDate = new Date();
	let infoScrimEmbed = new Discord.RichEmbed()
	.setTitle("Fortnite Pro Elite Scrim Info", nficon)
	.addField("Hosted by:", message.author)
	.addField("Cargando contenido", "Cargue contenido presionando Listo para cargar contenido para que esté al 100%, luego presione cancelar.")
	.addField("Rules:", "**Using C4, Clingers and Third Partying in top 10 are now allowed**!, please obey the rules while scrimming. Also please report players with !report, and do not publicly announce it.")
	.setFooter(`Match dirigido por ${message.author.username}`, negicon)
	.setTimestamp()
	.setColor(4702463);
	
	scrimlast3chan.send(infoScrimEmbed);

	const startTimeout = ms => new Promise(res => setTimeout(res, ms))
	await startTimeout(9000);
	scrimlast3chan.overwritePermissions(message.guild.id, {
	SEND_MESSAGES: true
	})	
		
		
		
	let startEmbed = new Discord.RichEmbed()
	.setTitle("**Esperando IDs de los servidores...**")
	.setDescription("Tienes 61 segundos para escribit tu Last3!")
	.addField("Por favor ingrese los ultimos 3 digitos de su servidor!", "Dentro del juego puedes encontrar esto en la esquina superior izquierda de la pantalla.")
	.setColor(6812512);
	const end3Time = Date.now() + 1000 * 61;
	const sent3Message = await scrimlast3chan.send(startEmbed);
	let now3;
	while( (now3 = Date.now()) < end3Time ) {
		let minsRemaining = (end3Time - now3) / (1000);
		minsRemaining = Math.floor(minsRemaining);
		startEmbed.setDescription(`Tienes *${minsRemaining}* segundos para escribir su Last3!`)
		sent3Message.edit(startEmbed);
		await startTimeout(5000);
	}
	scrimlast3chan.overwritePermissions(message.guild.id, {
	SEND_MESSAGES: true
	})
	message.delete().catch(O_o=>{});
	const allCodeRoles = message.guild.roles
		.filter(r => (/^\w{3}$/).test(r.name))
		.sort((roleA, roleB) => roleA.name.localeCompare(roleB.name))
		.array();
		const SPLIT_LENGTH = 25;
		const splitCodeRoles = [];
		for(let i = 0; i < allCodeRoles.length; i += SPLIT_LENGTH){
			splitCodeRoles.push(allCodeRoles.slice(i, i + SPLIT_LENGTH));
		}
		for(const codeRoles of splitCodeRoles) {
			let eb = new Discord.RichEmbed().setColor(16776960).setTitle("Informacion del juego").setFooter(`[Live] con ${allCodeRoles.length} matches.`);
			for(const role of codeRoles) {
				const membersString = role.members.map(m => m.user.tag).join("\n");
				eb.addField(`ID: ${role.name}`, membersString, true);
			}
			let last3chan = message.guild.channels.find(`name`, "scrim-last3");

			last3chan.send(eb);
			
			last3chan.overwritePermissions(message.guild.id, {
			SEND_MESSAGES: false
			})
			
		}
		
		

		

	let nextgameEmbed = new Discord.RichEmbed()
	.setTitle("**Siguiente scrim en aproximadamente...**")
	.setDescription("*25 Minutos*")
	.setColor(13859315);

	let last3chan = message.guild.channels.find(`name`, "scrim-last3");
	
	last3chan.overwritePermissions(message.guild.id, {
			SEND_MESSAGES: false
			})
	last3chan.send("*Chat bloquado...*");
		
	await startTimeout(3000);
		const agree = "👍";
	const disagree = "👎";

	let testEmbed = new Discord.RichEmbed()
	.setTitle("[Poll] Deberiamos reiniciar?")
	.setDescription("Por favor vota abajo.")
	.setFooter("Nota: El host decidira un reinicio!")
	.setColor(16097625);
	let msg = await last3chan.send(testEmbed);
	await msg.react(agree);
	msg.react(disagree);
	
	
		
		
		
	const endTime = Date.now() + 1000 * 60 * 25;
	const sentMessage = await scrimlast3chan.send(nextgameEmbed);
	let now;

	
	while( (now = Date.now()) < endTime ) {
		let minsRemaining = (endTime - now) / (1000 * 60);
		minsRemaining = Math.floor(minsRemaining);
		nextgameEmbed.setDescription(`*${minsRemaining} Minutes.*`)
		sentMessage.edit(nextgameEmbed);
		await startTimeout(1000 * 60);
	}

 
  
}

module.exports.help = {
  name: "start"
}
