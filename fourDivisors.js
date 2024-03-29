// Four Divisors:

// Given an integer array nums, return the sum of divisors of the integers in that array that have exactly four divisors. 
// If there is no such integer in the array, return 0.

// Example 1:
// Input: nums = [21,4,7]
// Output: 32
// Explanation: 
// 21 has 4 divisors: 1, 3, 7, 21
// 4 has 3 divisors: 1, 2, 4
// 7 has 2 divisors: 1, 7
// The answer is the sum of divisors of 21 only.

// Example 2:
// Input: nums = [21,21]
// Output: 64

// Example 3:
// Input: nums = [1,2,3,4,5]
// Output: 0

// Leetcode link: https://leetcode.com/problems/four-divisors/


// Solution:

var sumFourDivisors = function(nums) {
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        let count = 2;
        let sum = 1+nums[i];
        let j = 2;
        let k = nums[i];
        while ( j < k ) {
            if (nums[i] % j === 0) {
                k = nums[i] / j
                if (k === j) {
                    sum = sum + j;
                    count += 1;
                } 
                else {
                    sum = sum + j + k;
                    count += 2;
                }
            }
            j++;
            if (count > 4) break;
        }
        if (count === 4) {
            result += sum;
        }
    }

    return result;
};

console.log(sumFourDivisors([21,4,7]));
