// Maximum Number of Balloons:

// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:

// Input: text = "nlaebolko"
// Output: 1

// Example 2:

// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:

// Input: text = "leetcode"
// Output: 0

// Leetcode link: https://leetcode.com/problems/maximum-number-of-balloons/description/

// Solution:

var maxNumberOfBalloons = function(text) {
    
    let obj = {"b":0, "a":0, "l":0, "o":0, "n":0};

    for (let i = 0; i < text.length; i++) {
        if (text[i] == "b" || text[i] == "a" || text[i] == "l" || text[i] == "o" || text[i] == "n") {
                obj[text[i]]++;
        }
    }

    return Math.min(obj['b'], obj['a'], obj['n'], Math.floor(obj['o']/2), Math.floor(obj['l']/2));

};

// TC => O(n)
// SC => O(n)

