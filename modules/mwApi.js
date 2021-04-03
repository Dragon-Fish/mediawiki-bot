const getToken = require('./getToken')

class mwApi {
  constructor(bot) {
    this.bot = bot
  }
  get(params) {
    return this.query(params, 'GET')
  }
  post(params) {
    return this.query(params, 'POST')
  }
  async postWithToken(token, params) {
    return this.query(
      { token: await getToken(token, this.bot), ...params },
      'POST'
    )
  }
  query(params, method = 'GET') {
    return new Promise((resolve, reject) => {
      this.bot.api.call(
        { format: 'json', ...params },
        (err, data) => {
          if (err) {
            return reject(err)
          }
          return resolve(data)
        },
        method
      )
    })
  }
}

module.exports = mwApi
