// Majority Element:

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. 
// You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3

// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Leetcode link: https://leetcode.com/problems/majority-element/description/

// Solution:

var majorityElement = function(nums) {
    
    let n = nums.length;
    let obj = {};

    for (let i = 0; i < n; i++) {
        if (obj[nums[i]]) {
            obj[nums[i]]++;
        }
        else {
            obj[nums[i]] = 1;
        }
        if (obj[nums[i]] > n/2) {
            return nums[i];
        }
    }

    // for (let num in obj) {
    //     if (obj[num] > n/2) {
    //         return num;
    //     }
    // }

};

// TC => O(n)
// SC => O(n)

console.log(majorityElement(nums = [2,2,1,1,1,2,2]));

