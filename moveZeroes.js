// Problem:

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]


// Approach-I:

// const moveZeroes = function(nums) {

//     let j = 0;

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] != 0) {
//             nums[j] = nums[i];
//             j++;
//         }
//     }

//     for (i = j; i < nums.length; i++) {
//         nums[i] = 0;
//     }

//     return nums;
// }

// console.log(moveZeroes([0,1,0,3,12]));



// Approach-II:

const moveZeroes = function(nums) {

    for (let i = nums.length-1; i >= 0; i--) {
        if (nums[i] === 0) {
            nums.push(0);
            nums.splice(i, 1);
        }
    }
    return nums;

}

console.log(moveZeroes([0,1,0,3,12]));


