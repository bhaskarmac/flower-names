var expect = require('chai').expect;
var flowers = require('./index');

describe('flower-names', function () {
	describe('all', function () {

		it('should be array of strings', function(){
			expect(flowers.all).to.satisfy(isArrayOfStrings);

			function isArrayOfStrings(array){
				return array.every(function(item){
					return typeof item === 'string';
				});
			}
		});


		it('should contain Jasmine', function () {
			expect(flowers.all).to.include('Jasmine');
		});

	});

	describe('random', function(){
		it('should return random item from flower.all', function () {
			var randomItem = flowers.random();
			expect(flowers.all).to.include(randomItem);
		});
	});
	
});
