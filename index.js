const assert = require('assert')

module.exports = getServerPort

// get the port from a server
// (obj) -> num
function getServerPort (server) {
  assert.equal(typeof server, 'object')
  const address = server.address()
  const port = address.port
  return port
}
