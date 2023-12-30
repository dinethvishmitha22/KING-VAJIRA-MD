const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb://uwrr2obvrb4kbwnrvimy:rbgieh8nfk7EylXCh2D@byg4ii8uzy5rro8bcdfu-mongodb.services.clever-cloud.com:2008/byg4ii8uzy5rro8bcdfu"
global.port= process.env.PORT || 5000
global.email = 'botwhatsapp204@gmail.com'
global.github = 'https://github.com/vajirabot1/KING-VAJIRA-MD'
global.location = 'pakistan'
global.gurl = 'https://instagram.com/naveeddogar_' // _chamu__official_
global.sudo = process.env.SUDO || '923096566451'
global.devs = '923096566451';
global.website = 'https://github.com/vajirabot1/KING-VAJIRA-MD' // 𝚑𝚒 𝚕𝚊𝚜𝚜𝚊𝚗𝚊 𝚕𝚊𝚖𝚊𝚢𝚘 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/09ab24679fb3a297a8905.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? '𝙆𝙄𝙉𝙂-𝙑𝘼𝙅𝙄𝙍𝘼-𝙈𝘿' : process.env.BOT_NAME,'_chamu__official_'
  ownername: process.env.OWNER_NAME === undefined ? 'Vajira Rathnayaka' : process.env.OWNER_NAME,'𝙲𝙷𝙰𝙼𝚄 𝚋𝚘𝚢'
  sessionName:  process.env.SESSION_ID === undefined ? false : process.env.SESSION_ID,"VAJIRA;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU8wSVVCVWg1TWw1NG5hZEFFelVXdG1FbmwyRi9jdUtJc2JSVEdQK3Bsdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVnR0clZmbE51TUpYYU11RVkzWXdhT0xveklKVzhodjJJVzIzbzhDUEFUYz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLSnM3dFZ1TFlOUTFYVFFsRC95RFcweVlTTHZYN0FacVN0NmJRcVlRZmwwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRTG95aHlFNGo4UzR2dXZvbEpyNmhncXhKdklmc2UxeTRqVUtqRjUvaGl3PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZQU2VHb29wZ2VjY3pOd25DUzIzMXZsWnYvcmxCVGJnYy9kNGIwRndtbUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhJOHc5azFXUjltVG4zdEZaQ0VYck95R1loWFJ0WGRreVFQZGNXdUZiRkk9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwUWJRTTlENjZ6Z2lWUTNKT0h3d0NLTit6WlhvdGRJejNST2ZrNHpxNE9Ha21zWVNMYzJ2VmFBNzkvQ3RwMzFvenVhS1pyaFJuN3NKcjI2N3Q3Tndndz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjEzMiwiYWR2U2VjcmV0S2V5IjoiU25uMzRteXQ5V1FzTStTeXZYb2tQODNRckE2Q2NndlFiNmdpQ203OGZxcz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiWHBib0xjWWxRbmVmWFlPa19zekJHUSIsInBob25lSWQiOiI4YmM1NzUyNi04M2RlLTQyOWYtODBhZS00N2U1NjA2NjM0OTkiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVXBHM2ZReVFaNXVEVFBoL0NLVU1Rb2xqbnMwPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpTkhLbkROc01YemJEVTFScFFyaUFuSEdvN2c9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNOaitwcHdHRU5LZ3Y2d0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJlQ05QRS9kWGNuazVtcnpoM2w4VnB1bU1ORTJpbDk0Mnp5eHZoaGNIcHlRPSIsImFjY291bnRTaWduYXR1cmUiOiJYMTFRdTlQMWlPVzk1TjQ4dFlLYi9vdW5TVUJFaDFoRXZvSUNDSGZrRDNWRFFCOE9HNXFHT29EYlUycUpsSEJXQitzN3R1enN0YnEvRmxlRC9pSTlCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiaUxOcFhadHNhaUMrUXZueEFqRkt4alhCSXMrd24yOXB6d0NoRDVXb1llcVZ6M3lGU25xcnZOdjh2RklrMnFsU0xTd3Zzc00rMTRuV2R6cXVVd0dzaUE9PSJ9LCJtZSI6eyJpZCI6Ijk0NzEzNDY2Mzc1OjFAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MTM0NjYzNzU6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYZ2pUeFAzVjNKNU9acTg0ZDVmRmFicGpEUk5vcGZlTnM4c2I0WVhCNmNrIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzAzOTIzNzk4fQ=="
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'Vajira-Rathnayaka' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'King-Vajira-Md' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.０.１' : process.env.VERSION,
  LANG: process.env.THEME|| 'VAJIRA',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
