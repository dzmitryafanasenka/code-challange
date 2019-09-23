## Use recursion to sum all the values contained within a jagged array.

### Overview

Write a _recursive_ function to sum all the values a jagged array.


### Function Signature

```
/**
 * Sums all values contained within an array -- even if the array
 * is jagged.
 *
 * @param {Array} array - The array.
 * @returns {Number} - The sum of all values within an array.
 */
function sumArray(array) {
    
}
```

### Input/Output

#### Input

* `array` {Array} - An array where each item could be an integer or an array of integers.


#### Output

* `sum` {Number} - The sum of all numbers in the array.


### Example

* Given each of the following arrays, the output should be `10`

```
[ 1, 2, 3, 4 ]
```

```
[ [ 1 ], [ 2, 3 ], [ 4 ] ]
```

```
[ [ 1 ], [ [ 2, 3 ], [ 4 ] ] ]
```


### Required

* A valid solution in JavaScript in the form of a single, recursive function.
* Unit tests that demonstrate your solution is correct.








