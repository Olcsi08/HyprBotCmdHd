const Discord = require("discord.js")
const bot = new Discord.Client({ disableEveryone: true });
const fs = require("fs");
const { config } = require("process");
const db = require("quick.db")
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
exports.run = async(client, message, args) => {
    let daily = await db.fetch(`daily_${message.author.id}`);
    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));

        message.channel.send(`Legközelebb ekkor tudod a napu jutalmat begyűjteni: : **${time.hours} óra**, **${time.minutes} perc**, **${time.seconds}másodperc**`)
    }
    else {
        const embed = new Discord.MessageEmbed()
            .setTitle("Napi jutalom begyűjtve!")
            .setDescription("Begyűjtöttél 1000 pénzt")
            .setColor("GREEN")
        message.channel.send(embed)
        db.add(`money_${message.author.id}`, '1000')
        db.set(`daily_${message.author.id}`, Date.now())
    }
}
exports.config = {
    aliases: ["pong", "pingpong"]
}