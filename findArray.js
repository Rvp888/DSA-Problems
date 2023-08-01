// Find The Original Array of Prefix Xor:

// You are given an integer array pref of size n. Find and return the array arr of size n that satisfies:

// pref[i] = arr[0] ^ arr[1] ^ ... ^ arr[i].

// Note that ^ denotes the bitwise-xor operation.

// It can be proven that the answer is unique.

// Example 1:

// Input: pref = [5,2,0,3,1]
// Output: [5,7,2,3,2]
// Explanation: From the array [5,7,2,3,2] we have the following:
// - pref[0] = 5.
// - pref[1] = 5 ^ 7 = 2.
// - pref[2] = 5 ^ 7 ^ 2 = 0.
// - pref[3] = 5 ^ 7 ^ 2 ^ 3 = 3.
// - pref[4] = 5 ^ 7 ^ 2 ^ 3 ^ 2 = 1.

// Leetcode link: https://leetcode.com/problems/find-the-original-array-of-prefix-xor/description/

// Solution:

var findArray = function(pref) {
    
    // Note: a ^ b = c => a ^ c = b => c ^ b = a

    let output = [pref[0]];

    for (let i = 1; i < pref.length; i++) {
        let curNum = pref[i];
        let preNum = pref[i-1];
        output.push(preNum ^ curNum);
    }

    return output;

};

// TC => O(n^2)
// SC => O(n)

console.log(findArray(pref = [5,2,0,3,1]));


