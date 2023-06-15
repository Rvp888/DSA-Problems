
// Check if All Characters Have Equal Number of Occurrences:

// Given a string s, return true if s is a good string, or false otherwise.

// A string s is good if all the characters that appear in s have the same number 
// of occurrences (i.e., the same frequency).

// Example 1:
// Input: s = "abacbc"
// Output: true
// Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.

// Example 2:
// Input: s = "aaabb"
// Output: false
// Explanation: The characters that appear in s are 'a' and 'b'.
// 'a' occurs 3 times while 'b' occurs 2 times, which is not the same number of times.


// Solution:

var areOccurrencesEqual = function(s) {
    
    let obj = {};

    for (let chr of s) {
        if (obj[chr]) {
            obj[chr]++;
        }
        else {
            obj[chr] = 1;
        }
    }

    let values = Object.values(obj);
    console.log(values);

    for (let i = 0; i < values.length-1; i++) {
        if (values[i] != values[i+1]) {
            return false;
        }
    }

    return true;
};


console.log(areOccurrencesEqual("abacbc"));

