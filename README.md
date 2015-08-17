# get-server-port
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![Downloads][downloads-image]][downloads-url]
[![js-standard-style][standard-image]][standard-url]

Get the port from a server.

## Installation
```bash
$ npm install get-server-port
```

## Usage
```js
import serverPort from 'get-server-port'
import http from 'http'

const server = http.createServer()
server.listen()

serverPort(server)
// => 2354
```

## API
### serverPort(server)
Get the port from a server instance.

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/get-server-port.svg?style=flat-square
[npm-url]: https://npmjs.org/package/get-server-port
[travis-image]: https://img.shields.io/travis/yoshuawuyts/get-server-port/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/get-server-port
[codecov-image]: https://img.shields.io/codecov/c/github/yoshuawuyts/get-server-port/master.svg?style=flat-square
[codecov-url]: https://codecov.io/github/yoshuawuyts/get-server-port
[downloads-image]: http://img.shields.io/npm/dm/get-server-port.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/get-server-port
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
