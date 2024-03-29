// Find Triangular Sum of an Array:

// You are given a 0-indexed integer array nums, where nums[i] is a digit between 0 and 9 (inclusive).

// The triangular sum of nums is the value of the only element present in nums after the following process terminates:

// * Let nums comprise of n elements. If n == 1, end the process. Otherwise, create a new 0-indexed integer array newNums of length n - 1.
// * For each index i, where 0 <= i < n - 1, assign the value of newNums[i] as (nums[i] + nums[i+1]) % 10, where % denotes modulo operator.
// * Replace the array nums with newNums.
// * Repeat the entire process starting from step 1.

// Return the triangular sum of nums.

// Example 1:

// Input: nums = [1,2,3,4,5]
// Output: 8
// Explanation:
// The above diagram depicts the process from which we obtain the triangular sum of the array.

// Leetcode link: https://leetcode.com/problems/find-triangular-sum-of-an-array/description/

// Solution:

var triangularSum = function(nums) {

    while (nums.length > 1) {
        let temp = [];
        for (let i = 0; i < nums.length-1; i++) {
            let sum = nums[i] + nums[i+1];
            let rem = sum % 10;
            temp.push(rem);
        }
        nums = [...temp];
    }

    return nums[0];

};

// TC => O(n^3)
// SC => O(n)

console.log(triangularSum(nums = [1,2,3,4,5]));

