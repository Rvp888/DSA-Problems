// N-Repeated Element in Size 2N Array:

// You are given an integer array nums with the following properties:

// * nums.length == 2 * n.
// * nums contains n + 1 unique elements.
// * Exactly one element of nums is repeated n times.

// Return the element that is repeated n times.

// Example 1:

// Input: nums = [1,2,3,3]
// Output: 3

// Example 2:

// Input: nums = [2,1,2,5,3,2]
// Output: 2

// Leetcode link: https://leetcode.com/problems/n-repeated-element-in-size-2n-array/description/

// Solution:

var repeatedNTimes = function(nums) {
    
    let obj = {};

    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            obj[nums[i]]++;
        }
        else {
            obj[nums[i]] = 1;
        }
    }

    for (let key in obj) {
        if (obj[key] === nums.length/2) {
            return key;
        }
    }

};

console.log(repeatedNTimes(nums = [1,2,3,3]));

