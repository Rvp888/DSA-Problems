// Neither Minimum nor Maximum:

// Given an integer array nums containing distinct positive integers, find and 
// return any number from the array that is neither the minimum nor the maximum 
// value in the array, or -1 if there is no such number.

// Return the selected integer.

// Example 1:

// Input: nums = [3,2,1,4]
// Output: 2
// Explanation: In this example, the minimum value is 1 and the maximum value is 4. 
// Therefore, either 2 or 3 can be valid answers.

// Example 2:

// Input: nums = [1,2]
// Output: -1
// Explanation: Since there is no number in nums that is neither the maximum nor the 
// minimum, we cannot select a number that satisfies the given condition. Therefore, 
// there is no answer.

// Leetcode link: https://leetcode.com/problems/neither-minimum-nor-maximum/description/

// Solution-1:
// var findNonMinOrMax = function(nums) {
    
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== Math.min(...nums) && nums[i] !== Math.max(...nums)) {
//             return nums[i];
//         }
//     }

//     return -1;

// };


// Solution-2:
var findNonMinOrMax = function(nums) {
    
    if (nums.length <= 2) return -1;

    nums.sort((a, b) => a - b);

    return nums[1];

};

console.log(findNonMinOrMax(nums = [3,2,1,4]));

