// Find Lucky Integer in an Array:

// Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.

// Return the largest lucky integer in the array. If there is no lucky integer return -1.

// Example 1:

// Input: arr = [2,2,3,4]
// Output: 2
// Explanation: The only lucky number in the array is 2 because frequency[2] == 2.

// Example 2:

// Input: arr = [1,2,2,3,3,3]
// Output: 3
// Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.

// Example 3:

// Input: arr = [2,2,2,3,3]
// Output: -1
// Explanation: There are no lucky numbers in the array.

// Leetcode link: https://leetcode.com/problems/find-lucky-integer-in-an-array/description/

// Solution-1:
var findLucky = function(arr) {
    
    let lucky = -1;
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++;
        }
        else {
            obj[arr[i]] = 1;
        }
    }

    for (let key in obj) {
        if (obj[key] == key) {
            lucky = key;
        }
    }

    return lucky;

};

// TC => O(n);
// SC => O(n);

// console.log(findLucky(arr = [1,2,2,3,3,3]));


// Solution-2:
// var findLucky = function(arr) {
    
//     let obj = {};

//     for (let i = 0; i < arr.length; i++) {
//         if (obj[arr[i]]) {
//             obj[arr[i]]++;
//         }
//         else {
//             obj[arr[i]] = 1;
//         }
//     }

//     let keys = Object.keys(obj);
//     keys.sort((a, b) => b - a);

//     for (let i = 0; i < keys.length; i++) {
//         let num = Number(keys[i]);
//         if (obj[num] === num) {
//             return num;
//         }
//     }

//     return -1;

// };

// TC => O(n*log(n));
// SC => O(n);

// console.log(findLucky(arr = [2,2,2,3,3]));


