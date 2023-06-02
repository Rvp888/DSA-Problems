// Single Element in a Sorted Array

// You are given a sorted array consisting of only integers where every element appears exactly twice, 
// except for one element which appears exactly once.

// Return the single element that appears only once.

// Your solution must run in O(log n) time and O(1) space.


// Example 1:
// Input: nums = [1,1,2,3,3,4,4,8,8]
// Output: 2

// Example 2:
// Input: nums = [3,3,7,7,10,11,11]
// Output: 10


var singleNonDuplicate = function(nums) {
    let left = 0, right = nums.length-1;
    while (left <= right) {
        let mid = left + Math.floor((right-left)/2);
        if (nums[mid-1] === nums[mid]) {
            if ((mid-1) % 2) {
                right = mid-2;
            }
            else {
                left = mid+1;
            }
        }
        else if (nums[mid+1] === nums[mid]) {
            if ((mid+1) % 2) {
                left = mid+2;
            }
            else {
                right = mid-1;
            }
        }
        else {
            return nums[mid];
        }
    }
};
