// Keyboard Row:

// Given an array of strings words, return the words that can be typed using letters of the 
// alphabet on only one row of American keyboard like the image below.

// In the American keyboard:

// * the first row consists of the characters "qwertyuiop",
// * the second row consists of the characters "asdfghjkl", and
// * the third row consists of the characters "zxcvbnm".

// Example 1:

// Input: words = ["Hello","Alaska","Dad","Peace"]
// Output: ["Alaska","Dad"]

// Example 2:

// Input: words = ["omk"]
// Output: []

// Example 3:

// Input: words = ["adsdf","sfd"]
// Output: ["adsdf","sfd"]

// Leetcode link: https://leetcode.com/problems/keyboard-row/description/

var findWords = function(words) {
    
    let result = [];
    let row1 = 'qwertyuiopQWERTYUIOP';
    let row2 = 'asdfghjklASDFGHJKL';
    let row3 = 'zxcvbnmZXCVBNM';

    for (let i = 0; i < words.length; i++) {
        
        let word = words[i];
        let canType = true;
        for (let j = 0; j < word.length; j++) {
            if (!row1.includes(word[j])) {
                canType = false;
                break;
            }
        }
        if (canType) {
            result.push(word);
            continue;
        } 
        canType = true;
        for (let j = 0; j < word.length; j++) {
            if (!row2.includes(word[j])) {
                canType = false;
                break;
            }
        }
        if (canType) {
            result.push(word);
            continue;
        }
        canType = true;
        for (let j = 0; j < word.length; j++) {
            if (!row3.includes(word[j])) {
                canType = false;
                break;
            }
        }
        if (canType) {
            result.push(word);
            continue;
        }
    }

    return result;

};

