/*
describe('sum - proxyquire',function(){
  var sinon = require('sinon');
  var chai = require('chai');
  var expect = chai.expect;
  var sinonChai = require('sinon-chai');
  chai.use(sinonChai);

  var add = sinon.stub();

  var proxyquire = require('proxyquire');

  var sum = proxyquire('../src/sum',{
    '/add':add
  });

  beforeEach(function(){
    add.reset();
  });

  it('sums things', function() {
    add.withArgs(0,2).returns(2);
    add.withArgs(2,2).returns(4);
    add.withArgs(4,3).returns(7);
    add.throws();

    expect(sum(2,2,3)).to.equal(7);
  });
});
 */



describe('sum no proxyquire', function () {
  var sinon = require('sinon');
  var chai = require('chai');
  var expect = chai.expect;
  var sinonChai = require('sinon-chai');
  chai.use(sinonChai);

  var add = sinon.stub();
  var sum = require ('../src/sum');
  sum.setAddMock(add);

  beforeEach(function(){
    add.reset();
  });

  it('sums things', function() {
    add.withArgs(0,2).returns(2);
    add.withArgs(2,2).returns(4);
    add.withArgs(4,3).returns(7);
    add.throws();

    expect(sum(2,2,3)).to.equal(7);
  });
});