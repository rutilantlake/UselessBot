const Discord = require('discord.js');
const { Client, Attachment } = require('discord.js')
const client = new Client();
const ms = require('ms');

let version = "1.1.5"

require('events').EventEmitter.defaultMaxListeners = 15;

const PREFIX = '-';

client.on('ready', () => {
    console.log('This bot is online!');
    client.user.setActivity('anime', { type: 'WATCHING' });
})

client.on('message', message => {
    if (message.content === 'i love you') {
        message.reply(' i love emilia');
    }
})

client.on('message', message => {
    if (message.content === 'why') {
        message.channel.send('https://tenor.com/view/confused-white-persian-guardian-why-gif-11908780');
    }
})

client.on('message', message => {
    if (message.content === 'hehe') {
        message.channel.send('https://tenor.com/view/sensual-wink-blush-anime-animation-gif-5628679');
    }
})

client.on('message', message => {
    if (message.content === 'hey') {
        message.channel.send('https://imgur.com/9QamQDE');
    }
})

client.on('message', message => {
    if (message.content === 'huh') {
        message.channel.send('https://tenor.com/view/umm-confused-wtf-blinking-okay-gif-7513882');
    }
})

client.on('message', message => {
    if (message.content === "cute") {
        message.channel.send('https://tenor.com/view/okawaii-koto-thinking-anime-gif-17468931')
    }
})

client.on('message', message => {
    if (message.content === "omg") {
        message.channel.send('https://tenor.com/view/oh-my-god-oh-my-gah-anime-cooking-gif-13579892')
    }
})

client.on('message', message => {
    if (message.content === "no") {
        const attachment = new Discord.MessageAttachment('./sitboy.gif')
        message.channel.send(attachment)
    }
})


client.on('message', message => {

    let args = message.content.slice(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'pirate_website':
            message.channel.send('https://www.9anime.to');
            break;
        case 'info':
            if (args[1] === 'version') {
                message.channel.send('Version '+version);
            } else if (args[1] === 'commands') {
                const attachment = new Discord.MessageAttachment('./commands.txt')
                message.channel.send(message.author, attachment)
                break;
            }
            else {
                message.channel.send("Doesn't exist baka >:(");
            }
            break;
        case "you're":
            if (args[1] === 'useless') {
                message.channel.send("I'm not useless, i'm a godess... baka !");
            } else if (args[1] === 'stupid') {
                message.channel.send('no u');
            }
            break;
        case 'EXPLOSION':
            message.channel.send('https://tenor.com/view/konosoba-megumin-explosion-gif-7559840')
            break;
        case 'userinformation':
            const embed = new Discord.MessageEmbed()
                .setTitle('User Information')
                .addField('Name', message.author.username)
                .setColor(0xE74C3C)
                .addField('Current server', message.guild.name)
                .setThumbnail(message.author.displayAvatarURL())
            message.channel.send(embed);
            break;
        case '8ball':
            if (!args[2]) return message.reply("Please ask a full question!");

            let replies = ["Yes.", "No.", "I don't know.", "Ask again later."];

            let result = Math.floor((Math.random() * replies.length));
            let question = args.join(" ");

            let ballembed = new Discord.MessageEmbed()
                .setColor(0xE74C3C)
                .addField("Question", question)
                .addField("Answer", replies[result]);

            message.channel.send(ballembed)
            break;
        case 'ora':
            message.channel.send('ORA ORA ORA ORA ORA');
            break;
        case 'muda':
            message.channel.send('MUDA MUDA MUDA MUDA MUDA');
            break;
        case 'slap':
            message.channel.send('https://media1.tenor.com/images/c1246556aa5726ad6c0ee50f2c3998ce/tenor.gif?itemid=7864657')
            break;
        case 'dance':
            message.channel.send('https://media.tenor.com/images/3f324bbd9577d28eb1fb364ad9f2acfe/tenor.gif')
            break;
        case 'smoll':
            if (args[1] === 'brain') {
                message.channel.send('smoll brain baka')
                message.channel.send('https://i.imgur.com/he3ywUg.png0')
            }
            break;
        case 'facepalm':
            const attachment2 = new Discord.MessageAttachment('./facepalm.gif')
            message.channel.send(attachment2)
        case 'man':
            if (args[1] === 'of') {
                if (args[2] === 'culture') {
                    message.channel.send('https://cdn.discordapp.com/attachments/563892241836408833/732933234865995786/manofculture.png')
                }
            }
            break;
        case 'gender':
            if (args[1] === 'equality') {
                message.channel.send('https://cdn.discordapp.com/attachments/563892241836408833/732933600483475596/Z.png')
            }
        case 'judgement':
            message.channel.send('https://lh3.googleusercontent.com/proxy/pL-5l_cnLUB57MGwWCV6IYdS4nLrc8rFYY5IDdhe-Gj-5Z2Nk4nV7IhaDC4bOTO417K1H7dnryna9ijyHNh7PGiCoL2dB2Tf_F47Fd8')
            break;
        case 'the':
            if (args[1] === 'cake') {
                if (args[2] === 'is') {
                    if (args[3] === 'a') {
                        if (args[4] === 'lie') {
                            message.channel.send('https://cdn.discordapp.com/attachments/563892241836408833/732942482622382201/fetchimage.png')
                        }
                    }
                }
            }
            break;
        case 'goodnight':
            message.channel.send('https://media3.giphy.com/media/exy5cHFTm2mac/giphy.gif')
            break;
        case 'objection':
            message.channel.send('https://tenor.com/view/objection-court-judge-object-lol-gif-4833328')
            break;
        case 'pathetic':
            message.channel.send('https://data.whicdn.com/images/269339758/original.gif')
            break;
        case 'begin':
            message.channel.send('https://tenor.com/view/no-game-no-life-stare-evil-sora-game-gif-15177821')
            break;
        case 'nani':
            message.channel.send('何')
            message.channel.send('https://cdn.discordapp.com/attachments/563892241836408833/732955397677252638/2Q.png')
            break;
        case 'baka':
            message.channel.send('https://thumbs.gfycat.com/ConcreteVibrantDalmatian-size_restricted.gif')
            break;
        case 'Oh':
            if (args[1] === "you're") {
                if (args[2] === 'approaching') {
                    if (args[3] === "me") {
                        message.channel.send("Instead of running away you're coming straight towards me");
                        const attachment3 = new Discord.MessageAttachment('./manga.png');
                        message.channel.send(attachment3);
                    }
                }
            }
            break;
    }

})

client.login(process.env.token);