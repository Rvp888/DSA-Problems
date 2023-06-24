// Sort Array By Parity II:

// Given an array of integers nums, half of the integers in nums are odd, and the other half are even.

// Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.

// Return any answer array that satisfies this condition.

// Example:

// Input: nums = [4,2,5,7]
// Output: [4,5,2,7]
// Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.

// Leetcode link: https://leetcode.com/problems/sort-array-by-parity-ii/description/

// Solution:

var sortArrayByParityII = function(nums) {
    
    let answer = [];
    let even = 0, odd = 1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            answer[even] = nums[i];
            even += 2;
        }
        else {
            answer[odd] = nums[i];
            odd += 2;
        }
    }

    return answer;

};
