const Discord = require('discord.js');
const config = require('./config.json');
const bot = new Discord.Client();
const token = config.token;

bot.on('ready', () =>{
    console.log("Yes!");
})

bot.on('message', msg =>{
    if(msg.content == 'HELLO'){
        msg.reply('HELLO');
    }
})

bot.login(token);