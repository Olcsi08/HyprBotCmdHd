const Discord = require("discord.js")
const bot = new Discord.Client({ disableEveryone: true });
const fs = require("fs");
const { config } = require("process");
const db = require('quick.db')
const canvas1 = require('canvas')
const applyText = (canvas, text) => {
    const ctx = canvas.getContext('2d');
}
const ytdl = require("ytdl-core")
const ffmpeg = require("ffmpeg")
const avconv = require("avconv")
var figlet = require("figlet");
var money1 = new db.table("casino")
const ms = require("parse-ms");
const { Server } = require("http");
const { error } = require("console");
var inv = new db.table("Inventory")
const queue = new Map()
var warn = new db.table("Warns")
const ddif1 = require ('return-deep-diff')
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.events = new Discord.Collection();
let timeout = 86400000;
exports.run = (client, message, args) => {
    if (message.member.guild.owner || message.author.id == 477814830598717441) {
        if (!args[0]) {
            const embed = new Discord.MessageEmbed()
                .setTitle("Hiba")
                .setDescription(`**${message.author.username}** nem adtad meg hogy **kinek** és **mennyit** akarsz adni! !addmoney [userid] [amount]`)
                .setColor("RED")
                .setFooter(`HyprBot`)
                .setTimestamp()
            return message.channel.send(embed)
        }
        else {
            money1.get(`user_${args[0]}`)
            money1.add(`user_${args[0]}`, args[1])
            message.channel.send(`Sikeresen hozzáadtál ${args[0]} pénzéhez ennyit : ${args[1]}`)
        }
    }
    else if (!message.member.guild.owner || !message.author.id == 477814830598717441) {
        const embed = new Discord.MessageEmbed()
            .setTitle("Hiba")
            .setDescription(`**${message.author.username}** nem adtad meg hogy **kinek** és **mennyit** akarsz adni! !addmoney [userid] [amount]`)
            .setColor("RED")
            .setFooter(`${bot.user.username}`)
            .setTimestamp()
        return message.channel.send(embed)
    }
  }
  exports.config = {
	aliases: ["pong", "pingpong"]
  }