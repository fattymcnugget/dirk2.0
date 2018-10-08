var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var beemovie = require('./tts/beemovie.js');
var abdel = require('./tts/abdel.js');
var allstar = require('./tts/allstar.js');
var guccigang = require('./tts/guccigang.js');
var oceanMan = require('./tts/oceanMan');


// Configure logger settings
var ttsTimeout;
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
    token: auth.token,
    autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, channel) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        var timo = "https://www.manettas.com.au/mwp/wp-content/uploads/2016/08/Eastern-Rock-Lobster-Cooked-Sydney-Fresh-Seafood-Manettas-Seafood-Market.jpg";
        var i = Math.floor(Math.random() * 2);
        if (i === 1) {
            var yeet = "het is kop";
        } else {
            var yeet = "het is munt";
        }
        args = args.splice(1);
        switch (cmd.toLowerCase()) {
            // !ping
            case 'hitler':
                bot.sendMessage({
                    to: channelID,
                    message: 'sieg heil!'
                });
                break;
            case 'sieg':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://nbocdn.akamaized.net/Assets/Images_Upload/2018/03/23/6ffd1432-2d21-11e8-880e-97f285e6b0c3_web_scale_0.1135626_0.1135626__.jpg?maxheight=460&maxwidth=638&scale=both'
                });
                break;
            case 'lmao':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://i.ytimg.com/vi/ai4_XvlHB5c/hqdefault.jpg'
                });
                break;
            case'kyl':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://cdn.discordapp.com/attachments/392736493732495361/494933223671857172/kyl2.jpg'
                });
                break;
            case 'lobsterboy':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://cdn.discordapp.com/attachments/392736493732495361/492044448797163520/IMG-20171204-WA0001.jpg'
                });
                break;
            case 'olle':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://cdn.discordapp.com/attachments/392736493732495361/492044450164375553/e97931a5-4af8-4cda-9368-bee5f142ac18.jpg'
                });
                break;
            case 'lobster':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://cdn.discordapp.com/attachments/392736493732495361/492044448797163520/IMG-20171204-WA0001.jpg'
                });
                break;
            case 'mlady':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://cdn.discordapp.com/attachments/392736493732495361/492044148006715414/IMG-20180819-WA0001.jpg'
                });
                break;
            case 'walid':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://www.youtube.com/watch?v=UsH5FiGB2ik'
                });
                break;
            case 'coinflip':
                bot.sendMessage({
                    to: channelID,
                    message: yeet
                });
                break;
            case 'yeet':
                bot.sendMessage({
                    to: channelID,
                    message: "yeet",
                    tts: true
                });
                break;
            case 'marnickgang':
                bot.sendMessage({
                    to: channelID,
                    message: "marnick gang",
                    tts: true
                });
                break;
            case 'wollah':
                bot.sendMessage({
                    to: channelID,
                    message: "het is walid op die kanker beat",
                    tts: true
                });
                break;
            case 'timo':
                bot.sendMessage({
                    to: channelID,
                    message: "https://www.manettas.com.au/mwp/wp-content/uploads/2016/08/Eastern-Rock-Lobster-Cooked-Sydney-Fresh-Seafood-Manettas-Seafood-Market.jpg",


                });
                break;
            case 'protec':
                bot.sendMessage({
                    to: channelID,
                    message: "https://cdn.discordapp.com/attachments/392736493732495361/492048815482863616/unknown.png"
                });
                break;
            case 'rook':
                bot.sendMessage({
                    to: channelID,
                    message: "https://cdn.discordapp.com/attachments/392736493732495361/492045652797161498/unknown.png"
                });
                break;
            case 'gangshit':
                bot.sendMessage({
                    to: channelID,
                    message: "https://cdn.discordapp.com/attachments/392736493732495361/494972846368489472/2015-11-03_12.03.10.jpg"
                });
                break;
            case 'boudi':
                bot.sendMessage({
                    to: channelID,
                    message: "https://cdn.discordapp.com/attachments/392736493732495361/494973067517362196/IMG_1295.JPG"
                });
                break;
            case 'ruski':
                bot.sendMessage({
                    to: channelID,
                    message: "https://cdn.discordapp.com/attachments/392736493732495361/494973603377315840/IMG_1873.JPG"
                });
                break;
            case 'ollie':
                bot.sendMessage({
                    to: channelID,
                    message: "https://cdn.discordapp.com/attachments/392736493732495361/494973898895392774/IMG_2068.JPG"
                });
                break;
            case 'thomas':
                bot.sendMessage({
                    to: channelID,
                    message: "https://cdn.discordapp.com/attachments/392736493732495361/494975003209760768/IMG_2932.JPG"
                });
                break;
            case 'help':
                bot.sendMessage({to: channelID,embed: {
                        color: 15158332,
                        description: "A very simple Embed!",
                        fields: [{
                            name: "Memes",
                            value: "Thomas, Ollie, Ruski, Boudi, Gangshit, Rook, Protec, Timo, Wollah, Marnickgang, Yeet, Walid, Mlady, Lobster, Olle, Lobsterboy, Kyl, Lmao, Sieg, Hitler"
                        },
                            {
                                name: "Masked links",
                                value: "You can put [masked links](http://google.com) inside of rich embeds."
                            },
                        ],
                        timestamp: new Date(),
                        footer: {
                            icon_url: userID.avatarURL,
                            text: "© Dirk Bot"
                        }
                    }});
                break;
            case 'beemovie':
                tts(beemovie.beemovieText.split(' '), channelID, 0, bot);

                break;
            case 'abdel':
                tts(abdel.abdelText.split(' '), channelID, 0, bot);
                break;
            case 'allstar':
                tts(allstar.allstarText.split(' '), channelID, 0, bot);
                break;
            case 'guccigang':
                tts(guccigang.guccigangText.split(' '), channelID, 0, bot);
                break;
            case 'oceanman':
                tts(oceanMan.oceanMAnText.split(' '), channelID, 0, bot);
                break;


            case 'stop':
                clearTimeout(ttsTimeout);
                bot.sendMessage({
                    to: channelID,
                    message: "de tts is gestopt"
                });
                break;



            // Just add any case commands if you want to..
        }
    }
});

function tts(tekstArray, channelID, startNumber, bot) {
    bot.sendMessage({
        to: channelID,
        message: tekstArray.splice(startNumber, 30).join(' '),
        tts: true
    });
    if (tekstArray.length > 0) {
        ttsTimeout = setTimeout(function () {
            tts(tekstArray, channelID, startNumber, bot)
        }, 5000);
    }
};

