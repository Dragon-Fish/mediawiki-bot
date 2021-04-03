const nodemw = require('nodemw')
const secret = require('../secret')
const mwApi = require('../modules/mwApi')

const bot = new nodemw({
  ...secret.sites[0],
  userAgent: secret?.userAgent,
  debug: true,
})
const api = new mwApi(bot)

bot.logIn(async () => {
  require('./jobs/thankYouVeryMuch')({ api, bot })
})
