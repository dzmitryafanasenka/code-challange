/**
 * Sums all values contained within an array -- even if the array
 * is jagged.
 *
 * @param {Array} array - The array.
 * @returns {Number} - The sum of all values within an array.
 */
function sumArray(array) {
	return array.reduce((aggregator, value) => {
		if (Array.isArray(value)) {
			return aggregator + sumArray(value)
		} else {
			return aggregator + value
		}
	}, 0)
}

module.exports = sumArray
