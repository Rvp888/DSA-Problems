
// Count Numbers with Unique Digits:

// Given an integer n, return the count of all numbers with unique digits, x, where 0 <= x < 10**n.

 
// Example 1:
// Input: n = 2
// Output: 91
// Explanation: The answer should be the total numbers in the range of 0 ≤ x < 100, excluding 11,22,33,44,55,66,77,88,99

// Example 2:
// Input: n = 0
// Output: 1

// Solution:

function countNumbersWithUniqueDigits (n) {

    if (n === 0) {
        return 1;
    }

    let ans = 10, base = 9;

    for (let i = 2; i <= n; i++) {
        base *= (9 - i + 2);
        ans += base;
    }

    return ans;

}

console.log(countNumbersWithUniqueDigits(2));


