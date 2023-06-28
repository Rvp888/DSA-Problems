// Uncommon Words from Two Sentences:

// A sentence is a string of single-space separated words where each word consists only of lowercase letters.

// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

// Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

// Example 1:

// Input: s1 = "this apple is sweet", s2 = "this apple is sour"
// Output: ["sweet","sour"]

// Example 2:

// Input: s1 = "apple apple", s2 = "banana"
// Output: ["banana"]

// Leetcode link: https://leetcode.com/problems/uncommon-words-from-two-sentences/description/

// Solution:

var uncommonFromSentences = function(s1, s2) {
    
    let result = [];
    let obj = {};
    let s = s1 + " " + s2;
    s = s.split(" ");

    for (let i = 0; i < s.length; i++) {
        let word = s[i];
        if (obj[word]) {
            obj[word]++;
        }
        else {
            obj[word] = 1;
        }
    }

    for (let key in obj) {
        if (obj[key] === 1) {
            result.push(key);
        }
    }

    return result;

};

