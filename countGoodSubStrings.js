// Substrings of Size Three with Distinct Characters:

// A string is good if there are no repeated characters.

// Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.

// Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

// A substring is a contiguous sequence of characters in a string.

// Example 1:

// Input: s = "xyzzaz"
// Output: 1
// Explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz". 
// The only good substring of length 3 is "xyz".

// Example 2:

// Input: s = "aababcabc"
// Output: 4
// Explanation: There are 7 substrings of size 3: "aab", "aba", "bab", "abc", "bca", "cab", and "abc".
// The good substrings are "abc", "bca", "cab", and "abc".

// Leetcode link: https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/description/

// Solution:

var countGoodSubstrings = function(s) {
    
    let goodSubStrs = 0;

    for (let i = 0; i < s.length-2; i++) {
        let subStr = s.substr(i, 3);
        if (subStr[0] != subStr[1] && subStr[0] != subStr[2] && subStr[1] != subStr[2]) {
            goodSubStrs++;
        }
    }

    return goodSubStrs;

};

