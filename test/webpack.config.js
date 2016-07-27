const path = require('path')
const nodeExternals = require('webpack-node-externals')
const concat = require('..')

module.exports = {
  entry: path.join(__dirname, 'src/test'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'test.js'
  },
  target: 'node',
  externals: [ nodeExternals() ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: concat(
          [
            'css-inline'
          ],
          [
            'style',
            'css?modules'
          ]
        )
      }
    ]
  }
}