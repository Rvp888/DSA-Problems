
// Number of Common Factors:

// Given two positive integers a and b, return the number of common factors of a and b.

// An integer x is a common factor of a and b if x divides both a and b.

// Example 1:
// Input: a = 12, b = 6
// Output: 4
// Explanation: The common factors of 12 and 6 are 1, 2, 3, 6.

// Example 2:
// Input: a = 25, b = 30
// Output: 2
// Explanation: The common factors of 25 and 30 are 1, 5.

// Solution:

var commonFactors = function(a, b) {
    let commonFactors = 0;
    let smallInt = Math.min(a, b);
    let bigInt = Math.max(a, b);
    let factorsOfSmallInt = [];

    for (let i = 1; i <= smallInt; i++) {
        if (smallInt % i === 0) {
            factorsOfSmallInt.push(i);
        }
    }

    for (let i = 0; i < factorsOfSmallInt.length; i++) {
        if (bigInt % factorsOfSmallInt[i] === 0) {
            commonFactors++;
        }
    }

    return commonFactors;
};

console.log(commonFactors(12, 6));

