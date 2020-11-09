
const calculator = require('/home/moringa/Documents/node/machai/src/calc.js');
var expect = require('chai').expect;


describe('Calculator', () => {
	describe('Addition', () => {
		it('1 + 1 should be equals to 2', () => {
			expect(calculator.add(1, 1)).to.equal(2)
		})
		it('should sum two numbers', () => {
			expect(calculator.add(2, 2)).to.equal(4)
			expect(calculator.add(50, 39)).to.equal(89)
			expect(calculator.add(-31, 32)).to.equal(1)
			expect(calculator.add(10000, 89999)).to.equal(99999)
		})
	})