// Maximum Product of Two Elements in an Array:

// Given the array of integers nums, you will choose two different indices i and j of that array. 
// Return the maximum value of (nums[i]-1)*(nums[j]-1).

// Example 1:

// Input: nums = [3,4,5,2]
// Output: 12 
// Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, 
// that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 

// Example 2:

// Input: nums = [1,5,4,5]
// Output: 16
// Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.

// Leetcode link: https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/description/

// Solution:

var maxProduct = function(nums) {
    
    let result = (nums[0]-1)*(nums[1]-1);

    for (let i = 0; i < nums.length-1; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if ((nums[i]-1)*(nums[j]-1) > result) {
                result = (nums[i]-1)*(nums[j]-1);
            }
        }
    }

    return result;

};

console.log(maxProduct(nums = [3,4,5,2]));

