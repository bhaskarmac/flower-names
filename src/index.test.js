var expect = require('chai').expect;
var flowers = require('./index');

describe('all', function () {
	it('should be array of strings', function(){
		expect(flowers.all).to.satisfy(isArrayOfStrings);

		function isArrayOfStrings(array){
			return array.every(function(item){
				return typeof item === 'string';
			});
		}
	});
});
