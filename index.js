var extend = require('xtend')

function worldfile (obj) {
  return serialize(obj)
}

function serialize(obj) {
  var world = extend({
      scale: {
        x: 0,
        y: 0
      },
      skew: {
        x: 0,
        y: 0,
      },
      origin: {
        x: 0,
        y: 0
      }
    }, obj)


  return [
    world.scale.x,
    world.skew.y,
    world.skew.x,
    world.scale.y,
    world.origin.x,
    world.origin.y
  ]
  .map(float)
  .join('\n')
}

function float(n) {
  n = String(n)
  if (n.indexOf('.') === -1) {
    n = n+'.0'
  }
  return n
}

function parse(str) {
  throw new Error('Not implemented')
}

module.exports = worldfile
module.exports.parse = parse