// Check Distances Between Same Letters:

// You are given a 0-indexed string s consisting of only lowercase English letters, where each 
// letter in s appears exactly twice. You are also given a 0-indexed integer array distance of length 26.

// Each letter in the alphabet is numbered from 0 to 25 (i.e. 'a' -> 0, 'b' -> 1, 'c' -> 2, ... , 'z' -> 25).

// In a well-spaced string, the number of letters between the two occurrences of the ith letter is distance[i]. 
// If the ith letter does not appear in s, then distance[i] can be ignored.

// Return true if s is a well-spaced string, otherwise return false.

// Example 1:

// Input: s = "abaccb", distance = [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// Output: true
// Explanation:
// - 'a' appears at indices 0 and 2 so it satisfies distance[0] = 1.
// - 'b' appears at indices 1 and 5 so it satisfies distance[1] = 3.
// - 'c' appears at indices 3 and 4 so it satisfies distance[2] = 0.
// Note that distance[3] = 5, but since 'd' does not appear in s, it can be ignored.
// Return true because s is a well-spaced string.

// Example 2:

// Input: s = "aa", distance = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// Output: false
// Explanation:
// - 'a' appears at indices 0 and 1 so there are zero letters between them.
// Because distance[0] = 1, s is not a well-spaced string.

// Leetcode link: https://leetcode.com/problems/check-distances-between-same-letters/description/

var checkDistances = function(s, distance) {

    let alphabets = { 'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h': 7,
                      'i': 8, 'j': 9, 'k': 10, 'l': 11, 'm': 12, 'n': 13, 'o': 14,
                      'p': 15, 'q': 16, 'r': 17, 's': 18, 't': 19, 'u': 20, 'v': 21,
                      'w': 22, 'x': 23, 'y': 24, 'z': 25 };

    let obj = {};

    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] !== undefined) {
            obj[s[i]] = i - obj[s[i]] - 1;
        }
        else {
            obj[s[i]] = i;
        }
    }

    for (let key in obj) {
        let arrIndex = alphabets[key];
        if (obj[key] !== distance[arrIndex]) {
            return false;
        }
    }

    return true;

};
