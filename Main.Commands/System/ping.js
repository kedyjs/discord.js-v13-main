module.exports = {
    
    name: "ping",
    aliases: ["pong"],
    description: "Shows the bot's ping.",
    permissions: [],
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
      message.channel.send("Pong!").then(m => m.edit(`Pong! \`${client.ws.ping}ms\``));
    }
};