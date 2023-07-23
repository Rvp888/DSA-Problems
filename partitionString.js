// Optimal Partition of String:

// Given a string s, partition the string into one or more substrings such that the characters 
// in each substring are unique. That is, no letter appears in a single substring more than once.

// Return the minimum number of substrings in such a partition.

// Note that each character should belong to exactly one substring in a partition.

// Example 1:

// Input: s = "abacaba"
// Output: 4
// Explanation:
// Two possible partitions are ("a","ba","cab","a") and ("ab","a","ca","ba").
// It can be shown that 4 is the minimum number of substrings needed.

// Example 2:

// Input: s = "ssssss"
// Output: 6
// Explanation:
// The only valid partition is ("s","s","s","s","s","s").

// Leetcode link: https://leetcode.com/problems/optimal-partition-of-string/description/

// Solution:

var partitionString = function(s) {
    
    let substrings = [];
    let sub = "";

    for (let i = 0; i < s.length; i++) {
        if (sub.includes(s[i])) {
           substrings.push(sub); 
           sub = "";
           i--;
        }
        else {
            sub += s[i];
        }
        if (i == s.length-1) substrings.push(sub); 
    }

    return substrings.length;

};


