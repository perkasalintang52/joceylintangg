let { performance } = require('perf_hooks')
let fs = require ('fs')
let path = require('path')
let handler  = async (m, { conn, usedPrefix }) => { 
  let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime) 
  let totalreg = Object.keys(global.db.data.users).length
  let old = Math.round(performance.now())
  await m.reply('wait Kakak!!')
  let neww = Math.round(performance.now())
  conn.reply(m.chat, `
╠═〘 PIRACY ${namabot} 〙 ═
║
╠➥ *MOHON UNTUK TIDAK MENELPON*
║    *DAN SPAM CHAT Ke BOT*
║    *JIKA MELANGGAR = BLOCK*
╠➥ *KAMI TIDAK BERTANGGUNG*
║   *JAWAB ATAS PENYALAH*
║   *GUNAAN BOT*
╠➥ *KAMI TIDAK BERTANGGUNG*
║   *JAWAB ATAS KEBOCORAN DATA*
║   *PRIBADI ANDA*
╠➥ *KAMI TIDAK MENYIMPAN DATA*
║   *SEPERTI NOMER TELEPON*
║   *ANDA DI DATABASE KAMI*
║ 
║${readMore}
╠═〘 ${package.name} 〙 ═
╠➥ *Versi:* ${package.version}
╠➥ *HomePage:* ${(package.homepage ? package.homepage.url || package.homepage : '[unknown github url]')}
╠➥ *Issue:* ${package.bugs.url}
╠➥ *Ping:* ${neww - old} *ms*
╠➥ *Total user:* ${totalreg} *user*
╠➥ *Uptime:* ${uptime}
║
╠═〘 DONASI 〙 ═
╠➥ Pulsa : 081322577123
╠➥ OVO : 081322577123
╠➥ Dana : 01322577123
╠➥ Gopay : 081322577123
║
╠═ Request? ${package.bugs.url}
╠═ officiall Group *${conn.getName(conn.user.jid)}* :
${(global.linkGC).map((v, i) => '║ *Group ' + (i + 1) + '*\n║' + v).join`\n║\n`}
║
║ 
╠═ ©2021 ${package.name}
╠═ Script original by Nurutomo
╠═〘 ${namabot} 〙 ═
`.trim(), m)
}

handler.help = ['main']
handler.tags = ['infobot', 'rules']
handler.command = handler.command = /^(infobot|rules)$/i

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
