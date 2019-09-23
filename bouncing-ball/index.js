/**
 * Calculates the valid number of paths a bouncing ball can take down a flight of stairs.
 *
 * @param {Number} n - The length of the flight of stairs.
 * @param {Number} a - The acceleration value for the ball.
 * @returns {Number} - The total number of distinct, valid paths.
 */
function calculateBouncePaths(n, a) {
	if (n < 1 || n > 120)
		throw new Error('n should be in range 1...120')
	if (a < 0 || a > n)
		throw new Error(`a should be in range 0...${n}`)

	const dynamicTable = Array(n + 1).fill(0).map(() => {
		return Array(n + 1).fill(0)
	})

	for (let i = 1; i <= n; i++) {
		dynamicTable[i][i] = 1
	}

	for (let rowIndex = 1; rowIndex <= n; rowIndex++) {
		for (let columnIndex = 1; columnIndex <= n; columnIndex++) {
			if (rowIndex - columnIndex <= 0) {
				continue
			}
			for (let i = a; columnIndex - i >= 0; i++) {
				dynamicTable[rowIndex][columnIndex] += dynamicTable[rowIndex - columnIndex][columnIndex - i]
			}
		}
	}

	return dynamicTable[n].reduce((sum, value) => sum + value, 0)
}

module.exports = calculateBouncePaths
