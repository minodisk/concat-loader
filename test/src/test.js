const { jsdom, serializeDocument } = require('jsdom')
const document = global.document = jsdom('', {})
const window = global.window = document.defaultView

const should = require('should')
const loaded = require('./test.css')

describe('concat-loader', () => {
  it('should load module with multi loaders', () => {
    loaded.should.deepEqual([
      {
        foo: {
          backgroundColor: '#FF0000'
        }
      },
      {
        foo: '_2lYda0XDAEUVhH-nj3Cjlo'
      }
    ])
  })

  it('should execute side effect with loader', () => {
    document.querySelector('style').innerHTML.should.equal([
      '._2lYda0XDAEUVhH-nj3Cjlo {',
      '  background-color: #FF0000;',
      '}',
      ''
    ].join('\n'))
  })
})