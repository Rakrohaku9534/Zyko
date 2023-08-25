import { sticker } from '../lib/sticker.js';
import { ttp } from '../lib/scrape.js'
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text) throw 'Enter Text'
  try {
    const res = await ttp(text);
    const stiker = await sticker(false, res.result, global.packname, global.author);
    if (stiker) await conn.sendFile(m.chat, stiker, "sticker.webp", "", m);
  } catch (error) {
    console.error(error);
  }
};

handler.help = ['ttp'].map(v => v + ' <teks>');
handler.tags = ['sticker'];
handler.command = /^ttp$/i;
handler.limit = true
export default handler;
