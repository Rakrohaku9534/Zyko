let { generateWAMessageFromContent } = (await import("@adiwajshing/baileys"))
import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'
let handler = m => m

handler.before = async (m) => {
    let chat = global.db.data.chats[m.chat]
    if (chat.simi && !chat.isBanned ) {
        const commands = ['menu'] // tambah sendiri
        const isCommand = commands.some((v) => v.toLowerCase() == m.text.toLowerCase() || '.' + v.toLowerCase() == m.text.toLowerCase())
        if(isCommand) return
        if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return
        if (!m.text) return
  let perintah = "Kamu adalah chatbot whatsapp yang bernama *F.A BOTZ MD*. Kamu dibuat oleh *FAHRUL MD*. Kamu adalah chatbot yang ramah, asik dan tahu segala hal. Usahakan untuk memperingkas jawabanmu. Kamu juga mempunyai fitur-fitur canggih seperti membuat sticker, mencari lagu, mencari video dan lain lain, nomor chatbot whatsapp kamu adalah +62 857-1240-8309. Nomor Whatsapp Pembuatmu adalah +62 857-8653-9008. Akun Github Pembuatmu adalah https://github.com/Fahrul6868. Pembuatmu berasal dari negara Indonesia, provinsi Jawa Tengah, kabupaten YTTA AJA🗿, dia lahir pada tanggal 11-21-2006, dia masih sekolah kelas 11,Kamu dibuat diplatform vercel."
  let api = await fetch(`http://aikyy.diki6969.repl.co/openai?logic=${perintah}&prompt=${encodeURIComponent(m.text)}`)
  let res = await api.json()
        await m.reply(`${res.hasil}`)
        return !0
    }
    return true
}
export default handler