import fetch from 'node-fetch'
import fs from 'fs'

export async function all(m) {
  let pp = await this.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24f38f1982ea8358cc482.jpg')
  
  let vr = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  let num = vr.getRandom()
  let stc = await fs.readFileSync('./sticker/ress' + num + '.webp')


if (m.isBaileys) return
    if (m.chat.endsWith('broadcast')) return
    try {
        if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
            await this.sendMessage(m.chat, { sticker : stc, thumbnail: await( await fetch(pp)).buffer() , contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/62857865390008',
title: '「 ❔ 」',
body: wm,
sourceUrl: 'http://github.com/Fahrul6868', thumbnail: await( await fetch(pp)).buffer()
  }
 }}, { quoted: m })
          
        }
    } catch (e) {
        return
    }

                                
}
