const { MessageEmbed } = require('discord.js');
module.exports = {
    
    name: "help",
    aliases: ["commands"],
    description: "Shows the bot's commands.",
    permissions: [""],
    category: [],
    active: true,

    /**
    * @param {Client} client 
    */
   
    onLoad: function (client) {

    },

    /**
    * @param {Client} client 
    * @param {Message} message 
    * @param {Array<String>} args 
    */

    onRequest: async function (client, message, args) {
        let embed = new MessageEmbed().setFooter({text: `${sistem.embed.embedFooter}`}).setAuthor(sistem.embed.başlık, message.guild.iconURL({dynamic: true})).setColor(sistem.embed.embedColor)
        let botCommands = client.commands.filter(x => !x.permissions.includes("OWNER")).map(x => global.sistem.prefix[0] + x.name).join("\n")

        let helpEmbed = new MessageEmbed()
        .setDescription(`
# Commands
\` > \` ${botCommands}

# Prefix(s)
\` > \` ${global.sistem.prefix.map(x => x).join(" | ")}`)
       
        message.channel.send({embeds: [helpEmbed]})
    }
};