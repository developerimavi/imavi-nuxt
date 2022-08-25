module.exports = {
  wrapUrl (path) {
    let requestUrl = 'http://localhost:3005/imavi/' + path
    if (process.env.USE_LOCAL === 'false') {
      requestUrl = 'https://api.imavi.org/imavi/' + path
    }
    return requestUrl
  }
}
