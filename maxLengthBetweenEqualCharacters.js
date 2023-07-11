// Largest Substring Between Two Equal Characters:

// Given a string s, return the length of the longest substring between two equal characters, 
// excluding the two characters. If there is no such substring return -1.

// A substring is a contiguous sequence of characters within a string.

// Example 1:

// Input: s = "aa"
// Output: 0
// Explanation: The optimal substring here is an empty substring between the two 'a's.

// Example 2:

// Input: s = "abca"
// Output: 2
// Explanation: The optimal substring here is "bc".

// Example 3:

// Input: s = "cbzxy"
// Output: -1
// Explanation: There are no characters that appear twice in s.

// Leetcode link: https://leetcode.com/problems/largest-substring-between-two-equal-characters/description/

// Solution:

var maxLengthBetweenEqualCharacters = function(s) {
    
    let result = -1;
    let arr = [];

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (arr.includes(char)) {
            let ind = arr.indexOf(char);
            let length = (arr.length-1) - ind;
            if (length > result) result = length;
            arr.push(char);
        }
        else {
            arr.push(char);
        }
    }

    return result;

};

console.log(maxLengthBetweenEqualCharacters(s = "abca"));
