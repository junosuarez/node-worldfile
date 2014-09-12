# worldfile
generate world files for georeferenced images

Worldfiles are a format used for describing how images line up in a coordinate reference system, for example aligning aerial photography to other GIS data. The file format is [described on Wikipedia](https://en.wikipedia.org/wiki/World_file).

## usage
```js
var worldfile = require('worldfile')

    worldfile({
      scale: {
        x: 32.0,
        y: -32.0
      },
      skew: {
        x: 0.0,
        y: 0.0,
      },
      origin: {
        x: 691200.0,
        y: 4576000.0
      }
    })
    // =>
    // 32.0
    // 0.0
    // 0.0
    // -32.0
    // 691200.0
    // 4576000.0

```


## api

### `worldfile : (Object) => String`

Pass in an object with the parameters to georeference your image.


## installation

    $ npm install worldfile


## running the tests

From package root:

    $ npm install
    $ npm test


## contributors

- jden <jason@denizac.org>


## license

ISC. (c) MMXIV jden <jason@denizac.org>. See LICENSE.md
