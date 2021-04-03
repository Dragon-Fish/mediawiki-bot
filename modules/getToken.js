async function getToken(type = 'csrf', bot) {
  return new Promise((resolve, reject) => {
    bot.getToken('', type, (err, token) => {
      if (err) {
        return reject(err)
      }
      return resolve(token)
    })
  })
}

module.exports = getToken
