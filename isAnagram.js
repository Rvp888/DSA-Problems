// Valid Anagram:

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word 
// or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Leetcode link: https://leetcode.com/problems/valid-anagram/description/

// Solution:

var isAnagram = function(s, t) {
    
    if (s.length != t.length) return false;

    let obj1 = {}, obj2 = {};

    for (let i = 0; i < s.length; i++) {
        let char1 = s[i], char2 = t[i];
        if (obj1[char1]) {
            obj1[char1]++;
        }
        else {
            obj1[char1] = 1;
        }
        if (obj2[char2]) {
            obj2[char2]++;
        }
        else {
            obj2[char2] = 1;
        }
    }

    for (let key in obj1) {
        if (obj1[key] != obj2[key]) {
            return false;
        }
    }

    return true;

};

console.log(isAnagram(s = "anagram", t = "nagaram"));

