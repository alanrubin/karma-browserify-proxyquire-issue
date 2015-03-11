describe 'sum - proxyquire', ->
  sinon = require('sinon')
  chai = require('chai')
  expect = chai.expect
  sinonChai = require('sinon-chai')
  chai.use(sinonChai)

  add = sinon.stub()

  proxyquire = require('proxyquire')
  
  # Working
  # sum = require('../src/sum/sum')
  # Not Working
  sum = proxyquire('../src/sum/sum', {
    '../add/add':add
  })

  beforeEach ->
    add.reset()

  it 'sums things', ->
    add.withArgs(0,2).returns(2)
    add.withArgs(2,2).returns(4)
    add.withArgs(4,3).returns(7)
    add.throws()

    expect(sum(2,2,3)).to.equal(7)