function handler(m) {
//this.sendContact(m.chat, '0', 'Mark', m)
this.sendContact(m.chat, '6281322577123', namaowner, m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(nowner|creator)$/i

module.exports = handler
