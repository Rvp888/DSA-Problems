// Minimum Number of Steps to Make Two Strings Anagram:

// You are given two strings of the same length s and t. In one step you can choose any 
// character of t and replace it with another character.

// Return the minimum number of steps to make t an anagram of s.

// An Anagram of a string is a string that contains the same characters with a different 
// (or the same) ordering.

// Example 1:

// Input: s = "bab", t = "aba"
// Output: 1
// Explanation: Replace the first 'a' in t with b, t = "bba" which is anagram of s.

// Example 2:

// Input: s = "leetcode", t = "practice"
// Output: 5
// Explanation: Replace 'p', 'r', 'a', 'i' and 'c' from t with proper characters to make t anagram of s.

// Example 3:

// Input: s = "anagram", t = "mangaar"
// Output: 0
// Explanation: "anagram" and "mangaar" are anagrams.

// Leetcode link: https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/description/

// Solution: 

var minSteps = function(s, t) {
    
    let count = 0;
    let obj = {};
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (obj[char]) {
            obj[char]++;
        }
        else {
            obj[char] = 1;
        }
    }

    for (let i = 0; i < t.length; i++) {
        let char = t[i];
        if (obj[char]) {
            obj[char]--;
        }
        else {
            count++;
        }
    }

    return count;

};

// TC => O(n);
// SC => O(n);


