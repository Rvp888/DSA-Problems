
// Problem: Given an array nums containing n distinct numbers in the range [0, n], 
// return the only number in the range that is missing from the array.

// Example 1:
// Input: nums = [3,0,1]
// Output: 2.

// Example 2:
// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8.


// Solution-1:

// let missingNumber = function(nums) {
//     let size = nums.length;
//     for (let i = 0; i <= size; i++) {
//         if (!nums.includes(i)) {
//             return i;
//         }
//     }
// };

// console.log(missingNumber([9,6,4,2,3,5,7,0,1]));


// Solution-2:

let missingNumber = function(nums) {

    let missingNum;
    let size = nums.length;
    let expectedSum = size * (size+1) / 2;
    let realSum = 0;

    for (let i = 0; i < size; i++) {
        realSum += nums[i];
    }

    return missingNum = expectedSum - realSum;

}

console.log(missingNumber([9,6,4,2,3,5,7,0,1]));

