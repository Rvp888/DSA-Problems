// Two Out of Three:

// Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values 
// that are present in at least two out of the three arrays. You may return the values in any order.

// Example 1:

// Input: nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]
// Output: [3,2]
// Explanation: The values that are present in at least two arrays are:
// - 3, in all three arrays.
// - 2, in nums1 and nums2.

// Example 2:

// Input: nums1 = [3,1], nums2 = [2,3], nums3 = [1,2]
// Output: [2,3,1]
// Explanation: The values that are present in at least two arrays are:
// - 2, in nums2 and nums3.
// - 3, in nums1 and nums2.
// - 1, in nums1 and nums3.

// Leetcode link: https://leetcode.com/problems/two-out-of-three/description/

// Solution:

var twoOutOfThree = function(nums1, nums2, nums3) {
    
    let result = [];

    for (let i = 0; i < nums1.length; i++) {
        let int = nums1[i];
        if ((nums2.includes(int) || nums3.includes(int)) && !result.includes(int)) {
            result.push(int);
        }
    }

    for (let i = 0; i < nums2.length; i++) {
        let int = nums2[i];
        if ((nums1.includes(int) || nums3.includes(int)) && !result.includes(int)) {
            result.push(int);
        }
    }

    return result;

};

console.log(twoOutOfThree(nums1 = [3,1], nums2 = [2,3], nums3 = [1,2]));

