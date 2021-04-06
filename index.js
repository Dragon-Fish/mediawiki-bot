const nodemw = require('nodemw')
// const secret = require('../secret')
const mwApi = require('./modules/mwApi')

const bot = new nodemw({
  protocol: 'https',
  server: 'zh.moegirl.org.cn',
  path: '',
  username: process.env.MW_USERNAME,
  password: process.env.MW_PASSWORD,
  userAgent: process.env.USER_AGENT,
  debug: true,
})
const api = new mwApi(bot)

bot.logIn(async () => {
  require('./jobs/thankYouVeryMuch')({ api, bot })
})
