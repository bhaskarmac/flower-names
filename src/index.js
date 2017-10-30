var uniqueRandomArray = require('unique-random-array');
var flowerNames = require('./flower-names.json');

module.exports = {
	all: flowerNames,
	random: uniqueRandomArray(flowerNames)
}