const Discord = require('discord.js');
const { Client, Attachment } = require('discord.js')
const client = new Client();
const ms = require('ms');
const ping = require('minecraft-server-util');
const { setTimeout } = require('timers');
const { send } = require('process');
const { groupCollapsed } = require('console');
const { getHeapSpaceStatistics } = require('v8');

let version = "1.2.7"

require('events').EventEmitter.defaultMaxListeners = 15;

const prefix = '-';

client.on('ready', () => {
    console.log('This bot is online!');
    client.user.setActivity('-info commands for the commands.', { type: 'PLAYING' });
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
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'website') {
        message.channel.send('https://www.9anime.to')
    } else if (command === 'info') {
        message.channel.send("This bot is made by •Pink•#4934, please contact me if there are any bugs. Don't use any space, this will be fixed in the near future.")
    }else if(command === 'infoversion'){
        message.channel.send('Version '+ version)
    } else if(command === 'infocommands'){
         const commands = new Discord.MessageAttachment('./commands.txt');
         message.channel.send(commands);
    } else if (command === "you'reuseless") {
            message.channel.send("I'm not useless, i'm a goddess... Baka")

    } else if (command === 'explosion') {
        message.channel.send('https://tenor.com/view/konosoba-megumin-explosion-gif-7559840')
    } else if (command === 'userinformation') {
        const embed1 = new Discord.MessageEmbed()
            .setTitle('User Information')
            .addField('Name', message.author.username)
            .setColor(0xE74C3C)
            .addField('Current server', message.guild.name)
            .setThumbnail(message.author.displayAvatarURL())
        message.channel.send(embed1);

    } else if (command === '8ball') {
        if (!args[2]) return message.reply("Please ask a full question!");

        let replies = ["Yes.", "No.", "I don't know.", "Ask again later."];

        let result = Math.floor((Math.random() * replies.length));
        let question = args.join(" ");

        let ballembed = new Discord.MessageEmbed()
            .setColor(0xE74C3C)
            .addField("Question", question)
            .addField("Answer", replies[result]);

        message.channel.send(ballembed)
    } else if (command === 'ora') {
        message.channel.send('ORA ORA ORA ORA ORA')
    } else if (command === 'muda') {
        message.channel.send('MUDA MUDA MUDA MUDA MUDA MUDA')
    } else if (command === 'slap') {
        message.channel.send('https://media1.tenor.com/images/c1246556aa5726ad6c0ee50f2c3998ce/tenor.gif?itemid=7864657')
    } else if (command === 'dance') {
        message.channel.send('https://media.tenor.com/images/3f324bbd9577d28eb1fb364ad9f2acfe/tenor.gif')
    } else if(command === 'smollbrain'){
        message.channel.send('smoll brain baka')
        message.channel.send('https://i.imgur.com/he3ywUg.png0')
    } else if (command === 'facepalm'){
        const attachment2 = new Discord.MessageAttachment('./facepalm.gif')
        message.channel.send(attachment2)
    } else if(command === 'manofculture'){
        message.channel.send('https://cdn.discordapp.com/attachments/563892241836408833/732933234865995786/manofculture.png')
    } else if(command === 'genderequality'){
        message.channel.send('https://cdn.discordapp.com/attachments/563892241836408833/732933600483475596/Z.png')
    } else if (command === 'judgement'){
        message.channel.send('https://lh3.googleusercontent.com/proxy/pL-5l_cnLUB57MGwWCV6IYdS4nLrc8rFYY5IDdhe-Gj-5Z2Nk4nV7IhaDC4bOTO417K1H7dnryna9ijyHNh7PGiCoL2dB2Tf_F47Fd8')
    } else if (command === 'thecakeisalie'){
        message.channel.send('https://cdn.discordapp.com/attachments/563892241836408833/732942482622382201/fetchimage.png')
    } else if (command === 'goodnight'){
        message.channel.send('https://media3.giphy.com/media/exy5cHFTm2mac/giphy.gif')
    } else if(command === 'objection'){
        message.channel.send('https://tenor.com/view/objection-court-judge-object-lol-gif-4833328')
    } else if(command === 'pathetic'){
        message.channel.send('https://data.whicdn.com/images/269339758/original.gif')
    } else if(command === 'begin'){
        message.channel.send('https://tenor.com/view/no-game-no-life-stare-evil-sora-game-gif-15177821')
    } else if(command === 'nani'){
        message.channel.send('何')
        message.channel.send('https://cdn.discordapp.com/attachments/563892241836408833/732955397677252638/2Q.png')
    } else if (command === 'baka'){
        message.channel.send('https://thumbs.gfycat.com/ConcreteVibrantDalmatian-size_restricted.gif')
    } else if(command === 'ok'){
        message.channel.send('https://cdn.discordapp.com/attachments/563892241836408833/732980515380133997/Z.png');
    } else if(command === 'name'){
        message.channel.send('https://cdn.discordapp.com/attachments/563892241836408833/732981421643268106/images.png');
    } else if(command === 'mc'){
        message.channel.send('Here all the information of your minecraft server :nerd:')
        ping('theproslegacy.serverminer.com', 25565, (error, response) => {
            if (error) throw error
            const Embed = new Discord.MessageEmbed()
                .setTitle('Server Status')
                .addField('Server IP', 'theproslegacy.serverminer.com')
                .addField('Server port', response.port)
                .addField('Server version', response.version)
                .addField('Players online', response.onlinePlayers)
                .addField('Max players', response.maxPlayers)
                .setColor(0x55EA2B);

            message.channel.send(Embed)

            console.log(response);
        });

    } else if (command === 'mcserver'){
        message.channel.send('Here all the information of your minecraft server :nerd:')
        ping('94.23.150.142', 25591, (error, response) => {
            if (error) throw error
            const Embed2 = new Discord.MessageEmbed()
                .setTitle('Server Status')
                .addField('Server IP', response.host)
                .addField('Server port', response.port)
                .addField('Server version', response.version)
                .addField('Players online', response.onlinePlayers)
                .addField('Max players', response.maxPlayers)
                .setColor(0x55EA2B);

            message.channel.send(Embed2)

            console.log(response);
        });

    } else if(command === "ohyoureapproachingme"){
        message.channel.send("Instead of running away you're coming straight towards me");
        const attachment3 = new Discord.MessageAttachment('./manga.png');
        message.channel.send(attachment3);
    }
})

client.login(process.env.token);