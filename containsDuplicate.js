// Contains Duplicate:

// Given an integer array nums, return true if any value appears at least twice in the array, 
// and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true

// Example 2:

// Input: nums = [1,2,3,4]
// Output: false

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Leetcode link: https://leetcode.com/problems/contains-duplicate/description/

// Solution:

var containsDuplicate = function(nums) {
    
    // if (nums.length < 2) return false;

    // for (let i = 0; i < nums.length; i++) {
    //     let int = nums[i];
    //     if (nums.indexOf(int) != nums.lastIndexOf(int)) {
    //         return true;
    //     }
    // }

    // return false; Time limit exceeds.

    if (nums.length < 2) return false;

    let obj = {};

    for (let i = 0; i < nums.length; i++) {
        let int = nums[i];
        if (obj[int]) {
            return true;
        }
        else {
            obj[int] = 1;
        }
    }

    return false;

};

// TC => O(n);
// SC => O(n);

console.log(containsDuplicate(nums = [1,1,1,3,3,4,3,2,4,2]));

