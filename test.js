const test = require('tape')
const getPort = require('./')
const http = require('http')

test('assert input types', function (t) {
  t.plan(1)
  t.throws(getPort, 'object')
})

test('assert input types', function (t) {
  t.plan(1)
  const server = http.createServer()
  server.listen()
  const port = getPort(server)
  t.equal(typeof port, 'number')
  server.close()
})
