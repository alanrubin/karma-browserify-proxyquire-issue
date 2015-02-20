describe('add',function(){
  var add = require('../src/add');
  var chai = require('chai');
  var expect = chai.expect;

  it('adds things', function() {
    expect(add(2,2)).to.equal(4);
  });
});