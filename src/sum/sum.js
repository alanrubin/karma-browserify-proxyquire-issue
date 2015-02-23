module.exports = sum;

var add = require('../add/add');

function sum(items){
  var sum = 0;
  for (var i = 0, l = arguments.length; i < l; ++i) {
    sum = add(sum, arguments[i]);
  }
  return sum;
}