const nodemw = require('nodemw')
const secret = require('../secret')
const mwApi = require('../modules/mwApi')
const sleep = require('../utils/sleep')

const bot = new nodemw({
  ...secret.sites.萌娘百科,
  userAgent: secret.userAgent,
  debug: true,
})
const api = new mwApi(bot)

bot.logIn(async () => {
  bot.getUserContribs(
    {
      user: '星海子',
    },
    (err, data) => {
      if (err) throw err
      loopThank(data, 10)
    }
  )

  function sendThank(rev) {
    console.log(rev)
    return api.postWithToken('csrf', {
      action: 'thank',
      rev,
      source: 'diff',
    })
  }

  async function loopThank(list = [], max = 10, index = 0) {
    const count = index + 1

    console.log('step', count)

    if (!list?.[index]?.revid) throw 'No more'
    const ret = await sendThank(list[index].revid)
    console.log('thanked', ret)

    if (count >= max) return console.log('all done')
    await sleep(8000)
    return loopThank(list, max, count)
  }
})
