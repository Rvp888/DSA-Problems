// Check Whether Two Strings are Almost Equivalent:

// Two strings word1 and word2 are considered almost equivalent if the differences between the 
// frequencies of each letter from 'a' to 'z' between word1 and word2 is at most 3.

// Given two strings word1 and word2, each of length n, return true if word1 and word2 are 
// almost equivalent, or false otherwise.

// The frequency of a letter x is the number of times it occurs in the string.

// Example 1:

// Input: word1 = "aaaa", word2 = "bccb"
// Output: false
// Explanation: There are 4 'a's in "aaaa" but 0 'a's in "bccb".
// The difference is 4, which is more than the allowed 3.

// Example 2:

// Input: word1 = "abcdeef", word2 = "abaaacc"
// Output: true
// Explanation: The differences between the frequencies of each letter in word1 and word2 are at most 3:
// - 'a' appears 1 time in word1 and 4 times in word2. The difference is 3.
// - 'b' appears 1 time in word1 and 1 time in word2. The difference is 0.
// - 'c' appears 1 time in word1 and 2 times in word2. The difference is 1.
// - 'd' appears 1 time in word1 and 0 times in word2. The difference is 1.
// - 'e' appears 2 times in word1 and 0 times in word2. The difference is 2.
// - 'f' appears 1 time in word1 and 0 times in word2. The difference is 1.

// Leetcode link: https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/description/

// Solution:

var checkAlmostEquivalent = function(word1, word2) {
    
    let n = word1.length;
    let obj1 = {}, obj2 = {};

    for (let i = 0; i < n; i++) {
        let char1 = word1[i], char2 = word2[i];
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
        if (obj2[key] == undefined) {
            obj2[key] = 0;
        }
        if (Math.abs(obj1[key] - obj2[key]) > 3) {
            return false;
        }
    }

    for (let key in obj2) {
        if (obj1[key] == undefined) {
            obj1[key] = 0;
        }
        if (Math.abs(obj2[key] - obj1[key]) > 3) {
            return false;
        }
    }

    return true;

};

