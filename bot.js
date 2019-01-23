const Discord = require('discord.js');
const client = new Discord.Client();
const developers = ['536231577722552342','536231577722552342'];

console.log("BOT ONLINE");

client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;

    if (message.content.startsWith('-wt')) {
      client.user.setActivity(argresult, {type:'WATCHING'});
        client.user.setStatus("dnd")
          message.channel.send(` ** Done. :white_check_mark: ** `)
    } else //Khaled 
    if (message.content.startsWith('-ls')) {//Khaled
        client.user.setActivity(argresult , {type:'LISTENING'});
          client.user.setStatus("idle")
             message.channel.send(` ** Done. :white_check_mark: ** `)
    } else //Khaled
        if (message.content.startsWith('-st')) {
          client.user.setGame(argresult, "https://www.twitch.tv/ikhaled321");
            client.user.setStatus("dnd")
               message.channel.send(` ** Done. :white_check_mark: ** `)//Khaled
    } else 
    if (message.content.startsWith('-pl')) {
      client.user.setActivity(argresult , {type:'PLAYING'});//Khaled
       client.user.setStatus("idle")
         message.channel.send(` ** Done. :white_check_mark: ** `)
     }
})
client.login(process.env.TOKEN);
