// Number of Pairs of Strings With Concatenation Equal to Target:

// Given an array of digit strings nums and a digit string target, return the number of pairs 
// of indices (i, j) (where i != j) such that the concatenation of nums[i] + nums[j] equals target.

// Example 1:

// Input: nums = ["777","7","77","77"], target = "7777"
// Output: 4
// Explanation: Valid pairs are:
// - (0, 1): "777" + "7"
// - (1, 0): "7" + "777"
// - (2, 3): "77" + "77"
// - (3, 2): "77" + "77"

// Leetcode link: https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/description/

// Solution:

var numOfPairs = function(nums, target) {

    let count = 0;
    
    for (let i = 0; i < nums.length; i++) {
        let str1 = nums[i];
        for (let j = 0; j < nums.length; j++) {
            if (j != i) {
                let str2 = nums[j];
                if (str1 + str2 == target) {
                    count++;
                }
            } 
        }
    }

    return count;

};

// TC => O(n^2)
// SC => O(1)


