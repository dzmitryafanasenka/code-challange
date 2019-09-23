const assert = require('assert')
const sumArray = require('./index.js')

describe('sum-recursive', function() {
	describe('sumArray()', function() {
		it('should return the sum of all elements of the array: [1, 2, 3, 4]', function() {
			assert.strictEqual(sumArray([1, 2, 3, 4]), 10)
		})

		it('should return the sum of all elements of the jagged array: [[1], [2, 3], [4]]', function() {
			assert.strictEqual(sumArray([[1], [2, 3], [4]]), 10)
		})

		it('should return the sum of all elements of the jagged array: [[1], [[2, 3], [4]]]', function() {
			assert.strictEqual(sumArray([[1], [[2, 3], [4]]]), 10)
		})
	})
})
