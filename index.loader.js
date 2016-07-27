// Borrowed from https://github.com/webpack/multi-loader

module.exports = function () {}
module.exports.pitch = function (request) {
  this.cacheable()
  var items = JSON.parse(this.query.substr(1))
  items = items.map(function (item) {
    return 'require(' + JSON.stringify('-!' + item + '!' + request) + ')'
  })
  return '\nmodule.exports = ' + '[\n' + items.join(',\n') + '\n]'
}
