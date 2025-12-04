import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"
import fs from "fs"

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumber = "" //Ejemplo: 573218138672

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = [
["559296077349", "🜲 Propietario", true],
["51908027316"],
["51919199620", "ׅ  ׄ 몽 ۪sһᥲძ᥆ᥕ.᥊ᥡz ꩒ᰫ", true]
],

global.mods = ["51927181758"]
global.suittag = ["51927181758"] 
global.prems = ["51927181758"]

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.libreria = "Baileys Multi Device"
global.vs = "^1.8.2|Latest"
global.nameqr = "❤️̶۫̄͟Y͟u͟m͟ï̵̬͟͜𝐁o̸t̸❤️̶۫̄͟─"
global.sessions = "Sessions/Principal"
global.jadi = "Sessions/SubBot"
global.shadow_xyzJadibts = true

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.botname = "❤️̶۫̄͟Y͟u͟m͟ï̵̬͟͜𝐁o̸t̸❤️̶۫̄͟─"
global.textbot = "𝚈𝚞𝚖𝚒𝙱𝚘𝚝-𝙼𝙳 | © 𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝙱𝚢 Sarah"
global.dev = "© Powered By Sarah"
global.author = "Sarah"
global.etiqueta = "Sarah"
global.currency = "¥enes"
global.banner = "https://files.catbox.moe/2f9pzr.jpg"
global.icono = "https://files.catbox.moe/2f9pzr.jpg"
global.catalogo = fs.readFileSync('./lib/catalogo.jpg')

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.channel = "https://whatsapp.com/channel/0029VaCDajZ9WtBvBZy76k2h"
global.github = "https://github.com/OmarGranda/MiyukiBot-MD" 
global.gmail = "omargranda673@gmail.com"
global.ch = {
ch1: "120363422169517881@newsletter"
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.APIs = {
xyro: { url: "https://xyro.site", key: null },
yupra: { url: "https://api.yupra.my.id", key: null },
vreden: { url: "https://api.vreden.web.id", key: null },
delirius: { url: "https://api.delirius.store", key: null },
zenzxz: { url: "https://api.zenzxz.my.id", key: null },
siputzx: { url: "https://api.siputzx.my.id", key: null }
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.redBright("Update 'settings.js'"))
import(`${file}?update=${Date.now()}`)
})
