// Rearrange Array Elements by Sign:

// You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.

// You should rearrange the elements of nums such that the modified array follows the given conditions:

// * Every consecutive pair of integers have opposite signs.
// * For all integers with the same sign, the order in which they were present in nums is preserved.
// * The rearranged array begins with a positive integer.

// Return the modified array after rearranging the elements to satisfy the aforementioned conditions.

// Example 1:

// Input: nums = [3,1,-2,-5,2,-4]
// Output: [3,-2,1,-5,2,-4]
// Explanation:
// The positive integers in nums are [3,1,2]. The negative integers are [-2,-5,-4].
// The only possible way to rearrange them such that they satisfy all conditions is [3,-2,1,-5,2,-4].
// Other ways such as [1,-2,2,-5,3,-4], [3,1,2,-2,-5,-4], [-2,3,-5,1,-4,2] are incorrect because they do not satisfy one or more conditions.  

// Leetcode link: https://leetcode.com/problems/rearrange-array-elements-by-sign/description/

// Solution:

var rearrangeArray = function(nums) {

    let output = [];
    let evens = [], odds = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            evens.push(nums[i]);
        }
        else {
            odds.push(nums[i]);
        }
    }

    let i = 0;

    while (i < evens.length) {
        output.push(evens[i]);
        output.push(odds[i]);
        i++;
    }

    return output;

};

// TC => O(n^2)
// SC => O(n)

console.log(rearrangeArray(nums = [3,1,-2,-5,2,-4]));
