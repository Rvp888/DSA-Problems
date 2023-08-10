// Sort Vowels in a String:

// Given a 0-indexed string s, permute s to get a new string t such that:

// * All consonants remain in their original places. More formally, if there is an index i 
//   with 0 <= i < s.length such that s[i] is a consonant, then t[i] = s[i].

// * The vowels must be sorted in the nondecreasing order of their ASCII values. More formally, 
//   for pairs of indices i, j with 0 <= i < j < s.length such that s[i] and s[j] are vowels, 
//   then t[i] must not have a higher ASCII value than t[j].

// Return the resulting string.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in lowercase or uppercase. 
// Consonants comprise all letters that are not vowels.

// Example 1:

// Input: s = "lEetcOde"
// Output: "lEOtcede"
// Explanation: 'E', 'O', and 'e' are the vowels in s; 'l', 't', 'c', and 'd' are all consonants. 
// The vowels are sorted according to their ASCII values, and the consonants remain in the same places.

// Leetcode link: https://leetcode.com/problems/sort-vowels-in-a-string/description/

// Solution:

var sortVowels = function(s) {
    
    let result = "";
    let vowelString = "aeiouAEIOU";
    let vowels = [];

    for (let i = 0; i < s.length; i++) {
        if (vowelString.includes(s[i])) {
            vowels.push(s[i]);
        }
    }

    // vowels.sort(function (a, b) {
    //     if (a.charCodeAt(0) < b.charCodeAt(0)) {
    //         return -1;
    //     }
    //     else return 1;
    // })  
    // sorts the alphabets on the basis of their ASCII values.

    vowels.sort(); // also sorts the alphabets on the basis of their ASCII values.

    let j = 0;
    for (let i = 0; i < s.length; i++) {
        if (vowelString.includes(s[i])) {
            result += vowels[j];
            j++;
        }
        else {
            result += s[i];
        }
    }

    return result;

};

// TC => O(n^2)
// SC => O(n)

console.log(sortVowels(s = "lEetcOde"));


