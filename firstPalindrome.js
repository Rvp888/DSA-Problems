// Find First Palindromic String in the Array:

// Given an array of strings words, return the first palindromic string in the array. 
// If there is no such string, return an empty string "".

// A string is palindromic if it reads the same forward and backward.

// Example 1:
// Input: words = ["abc","car","ada","racecar","cool"]
// Output: "ada"
// Explanation: The first string that is palindromic is "ada".
// Note that "racecar" is also palindromic, but it is not the first.

// Example 2:
// Input: words = ["notapalindrome","racecar"]
// Output: "racecar"
// Explanation: The first and only string that is palindromic is "racecar".

// Example 3:
// Input: words = ["def","ghi"]
// Output: ""
// Explanation: There are no palindromic strings, so the empty string is returned.


// Solution:

var firstPalindrome = function(words) {
    
    for (let i = 0; i < words.length; i++) {
        let str = words[i];
        let j = 0, k = str.length-1;
        let isPalindrome = true;
        while (j < k) {
            if (str[j] !== str[k]) {
                isPalindrome = false;
            }
            j++, k--;
        }
        if (isPalindrome) {
            return str;
        }
    }

    return "";
};

