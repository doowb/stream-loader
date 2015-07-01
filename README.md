# vinyl-loader [![NPM version](https://badge.fury.io/js/vinyl-loader.svg)](http://badge.fury.io/js/vinyl-loader)

> loader-cache compatible loader that loads templates as vinyl files.

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i vinyl-loader --save
```

## Usage

```js
var loader = require('vinyl-loader');
var dest = require('dest');

var src = loader();
src('*.js')
  .pipe(jshint())
  .pipe(minify())
  .pipe(dest('dist/'))
```

## API

## Related projects

* [iterator-streams](https://github.com/doowb/iterator-streams): Iterate over a stack of streams.
* [loader-cache](https://github.com/jonschlinkert/loader-cache): Register loader functions that dynamically read, parse or otherwise transform file contents when the name… [more](https://github.com/jonschlinkert/loader-cache)
* [template](https://github.com/jonschlinkert/template): Render templates using any engine. Supports, layouts, pages, partials and custom template types. Use template… [more](https://github.com/jonschlinkert/template)

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/vinyl-loader/issues/new)

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2015 Jon Schlinkert
Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on July 01, 2015._