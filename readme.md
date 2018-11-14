# observ-view-size [![Build Status](https://travis-ci.org/bendrucker/observ-view-size.svg?branch=master)](https://travis-ci.org/bendrucker/observ-view-size) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/observ-view-size.svg)](https://greenkeeper.io/)

> Observable representation of the viewport size


## Install

```
$ npm install --save observ-view-size
```


## Usage

```js
var viewport = require('observ-view-size')

viewport()
//=> {x: width, y: height}

viewport(onResize)
//=> onResize({x, y})
```

## API

#### `viewport([callback])` -> `function` / `object`

##### callback

*Required*  
Type: `callback`

A callback to call with `{x, y}` sizes every time the window is resized. If no callback is provided, the current view size is returned.


## License

MIT © [Ben Drucker](http://bendrucker.me)
