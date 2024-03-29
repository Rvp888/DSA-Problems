// Find Numbers with Even Number of Digits:

// Given an array nums of integers, return how many of them contain an even number of digits.

// Example 1:

// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation: 
// 12 contains 2 digits (even number of digits). 
// 345 contains 3 digits (odd number of digits). 
// 2 contains 1 digit (odd number of digits). 
// 6 contains 1 digit (odd number of digits). 
// 7896 contains 4 digits (even number of digits). 
// Therefore only 12 and 7896 contain an even number of digits.

// Leetcode link: https://leetcode.com/problems/find-numbers-with-even-number-of-digits/description/

// Solution:

var findNumbers = function(nums) {
    
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i].toString();
        if (num.length % 2 === 0) {
            count++;
        }
    }

    return count;

};

console.log(findNumbers(nums = [12,345,2,6,7896]));
