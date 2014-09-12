var mochi = require('mochi')

describe('worldfile', function () {
  var worldfile = require('../')
  
  it('generates a worldfile', function () {

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
    .should.equal('32.0\n0.0\n0.0\n-32.0\n691200.0\n4576000.0')

  })

  it('defaults', function () {
    worldfile({})
      .should.equal('0.0\n0.0\n0.0\n0.0\n0.0\n0.0')
  })

  describe('.parse()', function () {
    it('is not implemented', function () {
      
      mochi.expect(function () {
        worldfile.parse('32.0\n0.0\n0.0\n-32.0\n691200.0\n4576000.0')
      }).to.throw('Not implemented')

    })
  })

})