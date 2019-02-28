const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("550677148705357826")
setInterval(function() {
channel.send(`اكس اكس اكس العمودي`);
}, 30)
})

client.login(process.env.BOT_TOKEN);