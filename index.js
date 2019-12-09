//const main = require('./structure/main.js');
const Discord = new Discord.Client();
client.on('ready', () => {
  console.log('Logged in as ${client.user.tag!}');
});

client.on('message', msg => {
  if(message.author.bot) return;
  if (msg.content === 'ping') {
    msg.replay('Pong!');
  }
});

client.login('token');