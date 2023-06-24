// Single Number:

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:

// Input: nums = [2,2,1]
// Output: 1

// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:

// Input: nums = [1]
// Output: 1

// Leetcode link: https://leetcode.com/problems/single-number/description/

// Solution:

// Sol-1: using XOR(^). XOR of two smilar numbers = 0. Time comp. = O(n) & Space comp. = O(1).
var singleNumber = function(nums) {

    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        res = res ^ nums[i];
    }

    return res;

}


// Sol-2: Time comp. = O(n) & Space comp. = O(n).

// var singleNumber = function(nums) {
    
//     let obj = {};

//     for (let i = 0; i < nums.length; i++) {
//         if (obj[nums[i]]) {
//             obj[nums[i]]++;
//         }
//         else {
//             obj[nums[i]] = 1;
//         }
//     }

//     for (let key in obj) {
//         if (obj[key] === 1) {
//             return key;
//         }
//     }

// };

console.log(singleNumber(nums = [4,1,2,1,2]));
