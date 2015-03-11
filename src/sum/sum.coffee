add = require('../add/add')

sum = (items) ->
	sum = 0
	sum = add(sum, argument) for argument in arguments
	sum

module.exports = sum