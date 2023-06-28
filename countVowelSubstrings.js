// Count Vowel Substrings of a String:

// A substring is a contiguous (non-empty) sequence of characters within a string.

// A vowel substring is a substring that only consists of vowels ('a', 'e', 'i', 'o', and 'u') 
// and has all five vowels present in it.

// Given a string word, return the number of vowel substrings in word.

// Example 1:

// Input: word = "aeiouu"
// Output: 2
// Explanation: The vowel substrings of word are as follows (underlined):
// - "aeiouu"
// - "aeiouu"

// Example 2:

// Input: word = "cuaieuouac"
// Output: 7
// Explanation: The vowel substrings of word are as follows (underlined):
// - "cuaieuouac"
// - "cuaieuouac"
// - "cuaieuouac"
// - "cuaieuouac"
// - "cuaieuouac"
// - "cuaieuouac"
// - "cuaieuouac"

// Leetcode link: https://leetcode.com/problems/count-vowel-substrings-of-a-string/description/

// Solution:

var countVowelSubstrings = function(word) {
    
    let result = 0;
    let vowels = "aeiou";

    for (let i = 0; i < word.length-4; i++) {
        if (!vowels.includes(word[i])) continue;
        
        for (let j = 5; j <= word.length-i; j++) {
            let subString = word.substr(i, j);
            let isVowelSubstr = true;
            if (!subString.includes('a') || !subString.includes('e') || 
                !subString.includes('i') || !subString.includes('o') || 
                !subString.includes('u')) {
                    isVowelSubstr = false;
                }
            for (let k = 0; k < subString.length; k++) {
                if (!vowels.includes(subString[k])) {
                    isVowelSubstr = false;
                }
            }
            if (isVowelSubstr) {
                result++;
            }
        }
    }

    return result;
    
};

console.log(countVowelSubstrings(word = "cuaieuouac"));
