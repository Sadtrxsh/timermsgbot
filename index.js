const Discord = require('discord.js')
const client = new Discord.Client();

token = 'token here';
interval = 2*720000000; //intervel time 
serverId = 'server id'; 
channelId = 'channel id';
message = '!d bump'; 

client.on('ready', () => {
    console.log(`Bot started on ${new Date()}`);
    console.log(`Logged in as ${client.user.username}#${client.user.discriminator}`)
    var guild = client.guilds.get(serverId);

    if(guild){
        let channel = guild.channels.get(channelId);
        if(channel && channel.type === "text"){
            setInterval(()=>{
                channel.send(message);
            }, interval);
        }else{
            console.log("incorrect channel id ")
        }
    }
});


client.login(token);
