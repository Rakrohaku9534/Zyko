let handler = async (m, { conn, usedPrefix: _p, __dirname, text, command }) => {
  let don = 'media/qr.png'
  let cap = `▷ DONASI BOT ◁
▪ Pulsa: ${global.ppulsa}
▫ Pulsa: ${global.ppulsa2}
▫ Dana: ${global.pdana}
▫ OVO: ${global.povo}
▪ Gopay: ${global.pgopay}

▲ Donasi juga kepadah pembuat script bot ini 085786539008

Semoga Anda diberikan kemudahan rezeki dan dilipatgandakan rezeki Anda.`
conn.sendMessage(m.chat, {
text: cap,
contextInfo: {
externalAdReply: {
title: '© F.ABOTZ MD V.1.1 (Public Botz)',
body: 'D O N A T E',
thumbnailUrl: "https://telegra.ph/file/f26155dcc30920db0a3d0.jpg",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
}

handler.help = ['donasi'];
handler.tags = ['info'];
handler.command = /^(donasi)$/i;

export default handler;
