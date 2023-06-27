// Find Words That Can Be Formed by Characters:

// You are given an array of strings words and a string chars.

// A string is good if it can be formed by characters from chars (each character can only be used once).

// Return the sum of lengths of all good strings in words.

// Example:

// Input: words = ["cat","bt","hat","tree"], chars = "atach"
// Output: 6
// Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.

// Leetcode link: https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/description/

// Solution:

var countCharacters = function(words, chars) {
    
    let sumOfLengths = 0;

    for (let i = 0; i < words.length; i++) {
        let tempChars = chars.split("");
        let word = words[i];
        let canForm = true;
        for (let j = 0; j < word.length; j++) {
            if (!tempChars.includes(word[j])) {
                canForm = false;
            }
            else {
                let index = tempChars.indexOf(word[j]);
                tempChars.splice(index, 1);
            }
        }
        if (canForm) {
            sumOfLengths += word.length;
        }
    }

    return sumOfLengths;

};

console.log(countCharacters(words = ["cat","bt","hat","tree"], chars = "atach"));
