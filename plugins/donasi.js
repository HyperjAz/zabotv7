let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat [085713345838]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Dana [082241956236]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
