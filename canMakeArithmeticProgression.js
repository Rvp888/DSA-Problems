// Can Make Arithmetic Progression From Sequence:

// A sequence of numbers is called an arithmetic progression if the difference between any 
// two consecutive elements is the same.

// Given an array of numbers arr, return true if the array can be rearranged to form an 
// arithmetic progression. Otherwise, return false.

// Example 1:

// Input: arr = [3,5,1]
// Output: true
// Explanation: We can reorder the elements as [1,3,5] or [5,3,1] with differences 2 and -2 respectively, between each consecutive elements.

// Example 2:

// Input: arr = [1,2,4]
// Output: false
// Explanation: There is no way to reorder the elements to obtain an arithmetic progression.

// Leetcode link: https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/description/

// Solution:

var canMakeArithmeticProgression = function(arr) {
    
    arr.sort((a, b) => a - b);
    let diff = arr[1] - arr[0];

    for (let i = 1; i < arr.length-1; i++) {
        if (arr[i+1] - arr[i] !== diff) {
            return false;
        }
    }

    return true;

};

console.log(canMakeArithmeticProgression(arr = [3,5,1]));

