// Borrowed from https://github.com/webpack/multi-loader

const loader = require.resolve('./index.loader.js')

module.exports = function (...items) {
  items = items.map((item) => {
    if (!Array.isArray(item)) {
      return item
    }
    return item.join('!')
  })
  return loader + '?' + JSON.stringify(items).replace(/!/g, '\\u0021')
}
