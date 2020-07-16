const Discord = require('discord.js');
const { Client, Attachment } = require('discord.js')
const client = new Client();
const ms = require('ms');
const ping = require('minecraft-server-util');
const { setTimeout } = require('timers');

let version = "1.2.7"

require('events').EventEmitter.defaultMaxListeners = 15;

const PREFIX = '-';

client.on('ready', () => {
    console.log('This bot is online!');
    client.user.setActivity('anime', { type: 'WATCHING' });
})

client.on('message', message => {
    if (message.content === 'i love you') {
        message.reply(' i love emilia');
    } else if (message.content === 'why') {
        message.channel.send('https://tenor.com/view/confused-white-persian-guardian-why-gif-11908780');

    } else if (message.content === 'hehe') {
        message.channel.send('https://tenor.com/view/sensual-wink-blush-anime-animation-gif-5628679');

    } else if (message.content === 'hey') {
        message.channel.send('https://imgur.com/9QamQDE');

    } else if (message.content === 'huh') {
        message.channel.send('https://tenor.com/view/umm-confused-wtf-blinking-okay-gif-7513882');

    } else if (message.content === 'cute') {
        message.channel.send('https://tenor.com/view/okawaii-koto-thinking-anime-gif-17468931')

    } else if (message.content === 'omg') {
        message.channel.send('https://tenor.com/view/oh-my-god-oh-my-gah-anime-cooking-gif-13579892')

    } else if (message.content === 'no') {
        const attachment = new Discord.MessageAttachment('./sitboy.gif')
        message.channel.send(attachment)
    }
})


client.on('message', message => {
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'pirate website') {
        message.channel.send('https://www.9anime.to')
    } else if (command === 'info') {
        message.channel.send("Made by •Pink•#4934, a bot that has memes and stuff i guess. Btw maybe you're looking for -info commands / -info version ;D")
    } else if (command === 'info commands') {
        const attachment = new Discord.MessageAttachment('./commands.txt')
        message.channel.send(message.author, attachment)
    }
})

client.login(process.env.token);