// Intersection of Multiple Arrays:

// Given a 2D integer array nums where nums[i] is a non-empty array of distinct positive integers, 
// return the list of integers that are present in each array of nums sorted in ascending order.

// Example 1:

// Input: nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]
// Output: [3,4]
// Explanation: 
// The only integers present in each of nums[0] = [3,1,2,4,5], nums[1] = [1,2,3,4], and nums[2] = [3,4,5,6] are 3 and 4, so we return [3,4].

// Example 2:

// Input: nums = [[1,2,3],[4,5,6]]
// Output: []
// Explanation: 
// There does not exist any integer present both in nums[0] and nums[1], so we return an empty list [].

// Leetcode link: https://leetcode.com/problems/intersection-of-multiple-arrays/description/

// Solution-1:

// var intersection = function(nums) {
    
//     let result = [];
//     let n = nums.length;
//     let temp = [];
//     let obj = {};

//     for (let i = 0; i < nums.length; i++) {
//         let subArr = nums[i];
//         temp.push(...subArr);
//     }

//     for (let i = 0; i < temp.length; i++) {
//         let num = temp[i];
//         if (obj[num]) {
//             obj[num]++;
//         }
//         else {
//             obj[num] = 1;
//         }
//     }

//     for (let num in obj) {
//         if (obj[num] === n) {
//             result.push(num);
//         }
//     }

//     return result;

// };

// console.log(intersection(nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]));



// Solution-2:
var intersection = function(nums) {
    
    let result = [];
    let n = nums.length;
    let temp = [];
    let obj = {};

    for (let i = 0; i < nums.length; i++) {
        let subArr = nums[i];
        temp.push(...subArr);
    }

    for (let i = 0; i < temp.length; i++) {
        let num = temp[i];
        if (obj[num]) {
            obj[num]++;
        }
        else {
            obj[num] = 1;
        }
        if (obj[num] === n) {
            result.push(num);
        }
    }

    return result.sort((a,b) => a-b);

};

console.log(intersection(nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]));