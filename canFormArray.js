// Check Array Formation Through Concatenation:

// You are given an array of distinct integers arr and an array of integer arrays pieces, 
// where the integers in pieces are distinct. Your goal is to form arr by concatenating the 
// arrays in pieces in any order. However, you are not allowed to reorder the integers in 
// each array pieces[i].

// Return true if it is possible to form the array arr from pieces. Otherwise, return false.

// Example 1:

// Input: arr = [15,88], pieces = [[88],[15]]
// Output: true
// Explanation: Concatenate [15] then [88]

// Example 2:

// Input: arr = [49,18,16], pieces = [[16,18,49]]
// Output: false
// Explanation: Even though the numbers match, we cannot reorder pieces[0].

// Example 3:

// Input: arr = [91,4,64,78], pieces = [[78],[4,64],[91]]
// Output: true
// Explanation: Concatenate [91] then [4,64] then [78]

// Leetcode link: https://leetcode.com/problems/check-array-formation-through-concatenation/description/

// Solution:

var canFormArray = function(arr, pieces) {

    arr = arr.join();

    if (arr.length != pieces.join().length) {
        return false;
    }

    for (let i = 0; i < pieces.length; i++) {
        let piece = pieces[i].join();
        if (!arr.includes(piece)) {
            return false;
        }
    }

    return true;

};


