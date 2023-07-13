// Ransom Note:

// Given two strings ransomNote and magazine, return true if ransomNote can be constructed 
// by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Example 2:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// Leetcode link: https://leetcode.com/problems/ransom-note/description/

// Solution:

var canConstruct = function(ransomNote, magazine) {
    
    if (magazine.length < ransomNote.length) return false;

    magazine = magazine.split("");

    for (let i = 0; i < ransomNote.length; i++) {
        let char = ransomNote[i];
        if (!magazine.includes(char)) {
            return false;
        }
        else {
            let index = magazine.indexOf(char);
            magazine.splice(index, 1);
        }
    }

    return true;

};

console.log(canConstruct(ransomNote = "aa", magazine = "aab"));
