// Find Greatest Common Divisor of Array:

// Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.

// The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

// Example 1:

// Input: nums = [2,5,6,9,10]
// Output: 2
// Explanation:
// The smallest number in nums is 2.
// The largest number in nums is 10.
// The greatest common divisor of 2 and 10 is 2.

// Example 2:

// Input: nums = [7,5,6,8,3]
// Output: 1
// Explanation:
// The smallest number in nums is 3.
// The largest number in nums is 8.
// The greatest common divisor of 3 and 8 is 1.

// Leetcode link: https://leetcode.com/problems/find-greatest-common-divisor-of-array/description/

// Solution:

var findGCD = function(nums) {
    
    nums.sort((a,b) => a-b);

    let smallestNum = Math.min(...nums);
    let largestNum = Math.max(...nums);

    if (largestNum % smallestNum === 0) return smallestNum;

    for (let i = smallestNum-1; i > 0; i--) {
        if (smallestNum % i === 0 && largestNum % i === 0) {
            return i;
        }
    }

};

console.log(findGCD(nums = [2,5,6,9,10]));
