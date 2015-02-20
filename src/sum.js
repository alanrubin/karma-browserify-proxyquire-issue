module.exports = sum;

var add = require('./add');

function sum(items){
  var sum = 0;
  for (var i = 0, l = arguments.length; i < l; ++i) {
    sum = add(sum, arguments[i]);
  }
  return sum;
}

// obviously a terrible idea
sum.setAddMock = function (mock){
  add = mock;
};
