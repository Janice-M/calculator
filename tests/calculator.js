
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
    describe('Subtraction', () => {
		it('1 - 1 should be equals to 0', () => {
			expect(calculator.subtract(1, 1)).to.equal(0)
		})
		it('should subtract two numbers', () => {
			expect(calculator.subtract(6, 2)).to.equal(4)
			expect(calculator.subtract(50, 39)).to.equal(11)
			expect(calculator.subtract(-31, 32)).to.equal(-63)
			expect(calculator.subtract(10000, 89999)).to.equal(-79999)
		})
    })
    
    describe('Multiplication', () => {
		it('1 * 1 should be equals to 1', () => {
			expect(calculator.multiply(1, 1)).to.equal(1)
		})
		it('should multiply two numbers', () => {
			expect(calculator.multiply(3, 2)).to.equal(6)
			expect(calculator.multiply(50, 39)).to.equal(1950)
			expect(calculator.multiply(-31, 32)).to.equal(-992)
			expect(calculator.multiply(-5, -2)).to.equal(10)
		})
	})