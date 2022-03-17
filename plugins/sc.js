let handler = async (m, { conn }) => m.reply('https://instagram.com/joceylintangg')
handler.help = ['script', 'sc']
handler.tags = ['info']
handler.command = /^s(c|cript)$/i

module.exports = handler
