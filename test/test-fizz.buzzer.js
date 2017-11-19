const should = require('chai').should();
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
	it('should give word ', function() {
		const fizzBuzz = [
			{a: 15, b: 15, expected: 'fizz-buzz'},
			{a: 5, b: 5, expected: 'buzz'},
			{a: 3, b: 3, expected: 'fizz'}
		];
		fizzBuzz.forEach(function(input) {
			const answer = fizzBuzzer(input.a, input.b);
			answer.should.equal(input.expected);
		})
	})
	it('not a number', function() {
		const notNumber = [
			['str', 4 ],
			['computer', 6 ]
		];
		notNumber.forEach(function(input) {
			 (function() {
			 	fizzBuzzer(input[0], input[1])
			}).should.throw(Error);
		})
	})
})

/*badInputs.forEach(function(input) {
      (function() {
          adder(input[0], input[1])
      }).should.throw(Error);*/