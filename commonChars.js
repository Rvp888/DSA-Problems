// Find Common Characters:

// Given a string array words, return an array of all characters that show up in all strings within 
// the words (including duplicates). You may return the answer in any order.

// Example 1:

// Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]

// Example 2:

// Input: words = ["cool","lock","cook"]
// Output: ["c","o"]

// Leetcode link: https://leetcode.com/problems/find-common-characters/description/

// Solution:

var commonChars = function(words) {
    
    let result = [];

    for (let i = 0; i < words[0].length; i++) {
        let char = words[0][i];
        let includes = true;
        for (let j = 1; j < words.length; j++) {
            if (!words[j].includes(char)) {
                includes = false;
            }
            else {
                words[j] = words[j].split("");
                let index = words[j].indexOf(char);
                words[j].splice(index, 1);
                words[j] = words[j].join("");
            }
        }
        if (includes) result.push(char);
    }

    return result;

};

console.log(commonChars(words = ["bella","label","roller"]));

