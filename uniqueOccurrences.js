// Unique Number of Occurrences:

// Given an array of integers arr, return true if the number of occurrences of each value in 
// the array is unique or false otherwise.

// Example 1:

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

// Example 2:

// Input: arr = [1,2]
// Output: false


// Leetcode link: https://leetcode.com/problems/unique-number-of-occurrences/description/


// Solution-1:
// var uniqueOccurrences = function(arr) {

//    let obj = {};

//    for (let i = 0; i < arr.length; i++) {
//        if (obj[arr[i]]) {
//            obj[arr[i]]++;
//        }
//        else {
//            obj[arr[i]] = 1;
//        }
//    }

//    let occurrences = Object.values(obj).sort((a,b) => a-b);

//    for (let i = 0; i < occurrences.length-1; i++) {
//        if (occurrences[i] === occurrences[i+1]) {
//            return false;
//        }
//    }

//    return true;

// };


// Solution-2:
var uniqueOccurrences = function(arr) {

    let obj1 = {}, obj2 = {};
 
    for (let i = 0; i < arr.length; i++) {
        if (obj1[arr[i]]) {
            obj1[arr[i]]++;
        }
        else {
            obj1[arr[i]] = 1;
        }
    }
 
    for (let key in obj1) {
        if (obj2[obj1[key]]) {
            return false;
        }
        else {
            obj2[obj1[key]] = true;
        }
    }
 
    return true; 
 
 };

 

