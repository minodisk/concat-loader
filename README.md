# multiple-loader [![CircleCI](https://circleci.com/gh/minodisk/multiple-loader.svg?style=svg)](https://circleci.com/gh/minodisk/multiple-loader)

A loader for webpack that concatenates multiple modules into a single module.

## Installation

```
npm install -D multiple-loader
```

## Usage

webpack.config.js:

```js
var multiple = require("multiple-loader")

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: multiple(
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
```

example.css:

```css
.foo {
  background-color: #FF0000;
}
```

exmaple.js:

```jsx
const [ styles, classes ] = require('./example.css')

console.log(styles)   // -> {
                      //   foo: {
                      //     backgroundColor: '#FF0000'
                      //   }
                      // }

console.log(classes)  // -> {
                      //   foo: '_2lYda0XDAEUVhH-nj3Cjlo'
                      // }

class MyComponent extends React.Component {
  render () => {
    return (
      <div>
        <div style={styles.foo}></div>
        <div className={classes.foo}></div>
      </div>
    )
  }
}
```
