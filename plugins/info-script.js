import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {

let str = `
🚩 This bot uses the Script from the F.A BOTZ MD. 

owner contact
wa.me/6285786539008`
conn.sendMessage(m.chat, {
text: str,
contextInfo: {
externalAdReply: {
title: v,
thumbnailUrl: zykomd,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
}
handler.help = ['source code']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

export default handler
