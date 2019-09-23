const assert = require('assert')
const calculateBouncePaths = require('./index.js')

describe('bouncing-ball', function() {
	describe('calculateBouncePaths() test output', function() {
		it('should return 1 for n = 10 and a = 10', function() {
			assert.strictEqual(calculateBouncePaths(10, 10), 1)
		})

		it('should return 4 for n = 10 and a = 3', function() {
			assert.strictEqual(calculateBouncePaths(10, 3), 4)
		})

		it('should return 42 for n = 10 and a = 0', function() {
			assert.strictEqual(calculateBouncePaths(10, 0), 42)
		})
	})

	describe('calculateBouncePaths() test constraints', function() {
		it('should return error if n < 0', function() {
			assert.throws(() => calculateBouncePaths(0, 1), Error)
		})

		it('should return error if n > 120', function() {
			assert.throws(() => calculateBouncePaths(121, 1), Error)
		})

		it('should return error if a < 0', function() {
			assert.throws(() => calculateBouncePaths(10, -1), Error)
		})

		it('should return error if a > n', function() {
			assert.throws(() => calculateBouncePaths(10, 11), Error)
		})

		it('should finished less then for 4 second', function() {
			const startTime = new Date().getTime()
			calculateBouncePaths(120, 0)
			const executionTime = new Date().getTime() - startTime
			assert.ok((executionTime / 1000) % 60 < 4)
		})
	})
})
