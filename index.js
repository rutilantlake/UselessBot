const Discord = require('discord.js');
const { Client, Attachment } = require('discord.js')
const client = new Client();
const ms = require('ms');
const ping = require('minecraft-server-util');
const { setTimeout } = require('timers');
const { send } = require('process');
const { groupCollapsed } = require('console');
const { getHeapSpaceStatistics } = require('v8');
const commands = "Fun:\ni love you\n-oh you're approaching me\n-you're useless\n-you're stupid\n-nice cock\n-ora\n-muda\n-za warudo\n-big brain\n-smoll brain\n-man of culture\n-genderequality\n-nani\n-the cake is a lie\n-name\n-ok\n-itadakimasu\n\n\nGIF:\nhehe\nwhy\nomg\ncute\nhuh\nno\ninteresting\nplease\nnice\nhey\n:3\nOwO\nUwU\nlolicon\n-baka\n-omae wa mou shindeiru\n-perfect\n-deskbeats\n-yare yare\n-nico nico nii\n-not yet\nhmmm\n-cute\n-hot\n-dance\n-bruh\n-facepalm\n-wryyy\n-slap\n-EXPLOSION\n-objection\n-pathetic\n-goodnight\n-begin\n\n\nInfo:\n-github\n-infoversion\n-infocommands\n-website (anime streaming website)\n-userinformation\n-mc (info The Pros)\n-mcserver (info Dawn's server)\n\n\nMade by: •Pink•#4934"

let version = "1.5.24"

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
        message.channel.send('https://cdn.discordapp.com/attachments/674614766886453278/775308415656132628/1604437767802.jpg')
        message.channel.send(attachment)
    } else if (message.content === 'please') {
        message.channel.send('https://tenor.com/view/skipbeat-kyoko-mogami-cry-huhu-gif-8564038')
    } else if (message.content === 'nice') {
        message.channel.send('https://tenor.com/view/jjba-joseph-joestar-joseph-jojo-part2-gif-17737771')
    } else if (message.content === 'UwU') {
        message.channel.send('https://tenor.com/view/smug-anime-face-gif-6194051')
    } else if (message.content === 'OwO') {
        message.channel.send('https://tenor.com/view/owo-whats-this-intensifies-mad-gif-12266002')
    } else if (message.content === ":3") {
        message.channel.send('https://tenor.com/view/nekopara-anime-smile-happy-delighted-gif-16605255')
    } else if (message.content.includes('rem')) {
        const attachment4 = new Discord.MessageAttachment('./rem.jpg');
        message.channel.send(attachment4);
    } else if (message.content === 'yes') {
        message.channel.send('https://tenor.com/view/yes-jotaro-kujo-jojos-gif-7297252')
    } else if (message.content.includes('lolicon')) {
        message.channel.send('https://tenor.com/view/jojo-bizarre-jojos-adventure-fbi-on-the-other-side-gif-13841785');
    } else if (message.content === 'interesting') {
        message.channel.send('https://tenor.com/view/hmmm-mmmm-interesting-batman-gif-11990772');
    } else if (message.content === ':o') {
        message.channel.send('https://tenor.com/view/surprised-pikachu-pokemon-shock-surprised-pikachu-gif-15357817')
    } else if (message.content === 'hm hm') {
        message.channel.send('https://tenor.com/view/regular-show-mordekai-rigby-hm-hm-hm-ahuh-gif-5116055')
    } else if (message.content === ':p') {
        message.channel.send('https://imgur.com/X2z5k4z')
    } else if (message.content.includes === "horny"){
        message.channel.send('https://tenor.com/view/anime-boob-hentai-nico-yazawa-love-live-gif-17393176')
    }
})


client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'website') {
        message.channel.send('https://www.9anime.to')
    } else if (command === 'info') {
        if (args[0] === 'commands') {
            message.author.send(commands)
        } else if (args[0] === 'version') {
            message.channel.send('Version ' + version)
        } else if (!args.length) {
            message.channel.send("This bot is made by •Pink•#4934, please contact me if there are any bugs.")
        }
    } else if (command === "you're") {
        if (args[0] === 'useless') {
            message.channel.send("I'm not useless i'm a goddess... Baka")
            message.channel.send('https://i.pinimg.com/474x/9e/6a/1b/9e6a1b11cc4e059abe5f4df7a0d3a965.jpg')
        } else if (args[0] === 'stupid') {
            message.channel.send('no u')
            message.channel.send('https://i.pinimg.com/originals/37/78/ef/3778ef8f0b7070b1ad427213b123f143.png')
        }
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
        message.channel.send('https://tenor.com/view/ora-star-platinum-jo-jos-bizarre-adventure-jojo-gif-5505650')
    } else if (command === 'muda') {
        message.channel.send('MUDA MUDA MUDA MUDA MUDA MUDA')
        message.channel.send('https://tenor.com/view/muda-muda-giorno-giovanna-jo-jo-gold-experience-muda-gif-14208660')
    } else if (command === 'slap') {
        message.channel.send('https://media1.tenor.com/images/c1246556aa5726ad6c0ee50f2c3998ce/tenor.gif?itemid=7864657')
    } else if (command === 'dance') {
        message.channel.send('https://media.tenor.com/images/3f324bbd9577d28eb1fb364ad9f2acfe/tenor.gif')
    } else if (command === 'smoll') {
        if (args[0] === 'brain') {
            message.channel.send('smoll brain baka')
            message.channel.send('https://i.imgur.com/he3ywUg.png0')
        }
    } else if (command === 'facepalm') {
        const attachment2 = new Discord.MessageAttachment('./facepalm.gif')
        message.channel.send(attachment2)
    } else if (command === 'man') {
        if (args[0] === 'of') {
            if (args[1] === 'culture') {
                message.channel.send('https://cdn.discordapp.com/attachments/563892241836408833/732933234865995786/manofculture.png')
            }
        }
    } else if (command === 'genderequality') {
        message.channel.send('https://cdn.discordapp.com/attachments/563892241836408833/732933600483475596/Z.png')
    } else if (command === 'judgement') {
        message.channel.send('https://lh3.googleusercontent.com/proxy/pL-5l_cnLUB57MGwWCV6IYdS4nLrc8rFYY5IDdhe-Gj-5Z2Nk4nV7IhaDC4bOTO417K1H7dnryna9ijyHNh7PGiCoL2dB2Tf_F47Fd8')
    } else if (command === 'thecakeisalie') {
        message.channel.send('https://cdn.discordapp.com/attachments/563892241836408833/732942482622382201/fetchimage.png')
    } else if (command === 'goodnight') {
        message.channel.send('https://media3.giphy.com/media/exy5cHFTm2mac/giphy.gif')
    } else if (command === 'objection') {
        message.channel.send('https://tenor.com/view/objection-court-judge-object-lol-gif-4833328')
    } else if (command === 'pathetic') {
        message.channel.send('https://data.whicdn.com/images/269339758/original.gif')
    } else if (command === 'begin') {
        message.channel.send('https://tenor.com/view/no-game-no-life-stare-evil-sora-game-gif-15177821')
    } else if (command === 'nani') {
        message.channel.send('何')
        message.channel.send('https://cdn.discordapp.com/attachments/563892241836408833/732955397677252638/2Q.png')
    } else if (command === 'baka') {
        message.channel.send('https://thumbs.gfycat.com/ConcreteVibrantDalmatian-size_restricted.gif')
    } else if (command === 'ok') {
        message.channel.send('https://cdn.discordapp.com/attachments/563892241836408833/732980515380133997/Z.png');
    } else if (command === 'name') {
        message.channel.send('https://cdn.discordapp.com/attachments/563892241836408833/732981421643268106/images.png');
    } else if (command === 'mc') {
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

    } else if (command === 'mcserver') {
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

    } else if (command === "oh") {
        if (args[0] === "you're") {
            if (args[1] === 'approaching') {
                if (args[2] === 'me') {
                    message.channel.send("Instead of running away you're coming straight towards me");
                    const attachment3 = new Discord.MessageAttachment('./manga.png');
                    message.channel.send(attachment3);
                }
            }
        }
    } else if (command === 'itadakimasu') {
        message.channel.send('https://tenor.com/view/tsurugaren-skipbeat-appreciation-gif-4747495');
    } else if (command === 'za') {
        if (args[0] === 'warudo') {
            message.channel.send('ZA WARUDOOOOOO')
            message.channel.send('https://tenor.com/view/za-warudo-zawarudo-the-world-gif-10578246')
        }
    } else if (command === 'deskbeats') {
        message.channel.send('https://cdn.discordapp.com/attachments/674614766886453278/733831871393169428/unknown.gif');
    } else if (command === 'nico') {
        if (args[0] === 'nico') {
            if (args[1] === 'nii') {
                message.channel.send('https://tenor.com/view/nico-nico-gif-7552264');
            }
        }
    } else if (command === 'nice') {
        if (args[0] === 'cock') {
            message.channel.send('https://media.makeameme.org/created/yo-nice-cock.jpg')
        }
    } else if (command === 'bruh') {
        message.channel.send('https://tenor.com/view/chkoupistani-annoyed-irritated-gif-15457748')
    } else if (command === 'github') {
        message.channel.send('https://github.com/rutilantlake/UselessBot')
    } else if (command === 'dab') {
        message.channel.send('https://i.redd.it/jkkl5ltfgnf01.png')
    } else if (command === 'not') {
        if (args[0] === 'yet') {
            message.channel.send('https://tenor.com/view/phineasandferb-phineas-ferb-notyet-notyetferb-gif-17986942');
        }
    } else if (command === 'big') {
        if (args[0] === 'dig') {
            const attachment5 = new Discord.MessageAttachment('./big.gif');
            message.channel.send(attachment5);
        }
    } else if (command === 'omae') {
        if (args[0] === 'wa') {
            if (args[1] === 'mou') {
                if (args[2] === 'shindeiru') {
                    message.channel.send('-NANI');
                    message.channel.send('https://tenor.com/view/omae-wa-mou-shindareo-youre-already-dead-anime-omae-wa-mo-anime-gif-15643835');
                }
            }
        }
    } else if (command === 'yare') {
        if (args[0] === 'yare') {
            message.channel.send('https://tenor.com/view/jojo-yare-yare-daze-jotaro-good-grief-okay-gif-13569904');
        }
    } else if (command === 'rero') {
        message.channel.send('https://cdn.discordapp.com/attachments/674614766886453278/743744781896646666/unknown.gif');
    } else if (command === 'wryyy') {
        message.channel.send('https://tenor.com/view/no-game-life-steph-mad-gif-5894330');
    } else if (command === 'hmmm') {
        message.channel.send('https://tenor.com/view/sasuke-thinking-anime-naruto-gif-13593873');
    } else if (command === 'cry') {
        message.channel.send('https://tenor.com/view/anime-umaru-cry-crying-tears-gif-5184314');
    } else if (command === 'big') {
        if (args[0] === 'brain') {
            message.channel.send('https://tenor.com/view/anime-anime-glasses-stare-glasses-gif-15313333');
        }
    } else if (command === 'cute') {
        message.channel.send('https://tenor.com/view/sailor-moon-suit-old-man-peace-sign-sailor-scout-anime-gif-14298094');
    } else if (command === 'hot') {
        message.channel.send('https://tenor.com/view/anime-girl-bleed-gif-14319663');
    } else if (command === 'perfect') {
        message.channel.send('https://tenor.com/view/excellent-thesimpsons-mr-burns-evilplan-gif-4699553');
    } else if (command === 'mods') {
        message.channel.send('https://drive.google.com/file/d/1Kunw392jOj-iZM3ZCB8uob4KOdautCXv/view?usp=sharing');
    } else if (command === "yeet") {
        message.channel.send('https://media.tenor.co/videos/1def80ea99034fd95e74677cb007c394/mp4');
    } else if (command === 'do') {
        if (args[0] === 'you') {
            if (args[1] === 'understand') {
                message.channel.send('https://tenor.com/view/jojo-do-you-understand-jojos-bizarre-adventure-anime-slime-gif-17398513')
            }
        }
    } else if(command === 'you'){
        message.channel.send('https://cdn.discordapp.com/attachments/674614766886453278/759795050003038209/Naamloos-1.png');
    }
})

client.login(process.env.token);