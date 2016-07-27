# concat-loader

A loader for webpack that concatenates multi modules into a single module.

## Installation

```
npm install -D concat-loader
```

## Usage

webpack.config.js:

``` javascript
var concat = require("concat-loader");
{
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: concat(
          [
            'css-inline',
          ],
          [
            'style',
            'css?modules',
          ]
        )
      }
    ]
  }
}
```

example.css:

```
.foo {
  background-color: #FF0000;
}
```

exmaple.js:

```
const [ styles, classes ] = require('./example.css')

console.log(styles)   // -> {
                      //   foo: {
                      //     backgroundColor: '#FF0000'
                      //   }
                      // }

console.log(classes)  // -> {
                      //   foo: 'XXXXXXXXXXXXXXXXXXXXXX'
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
