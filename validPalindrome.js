
// Valid Palindrome:
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and 
// removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric 
// characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.


// Solution:

const isPalindrome = function(s) {

    let alphaNumerics = "abcdefghijklmnopqrstuvwxyz0123456789";
    s = s.toLowerCase();
    let newStr = "";

    for (let i = 0; i < s.length; i++) {
        if (alphaNumerics.includes(s[i])) {
            newStr += s[i];
        }
    }

    let left = 0, right = newStr.length-1;
    while (left < right) {
        if (newStr[left] !== newStr[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
    
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));

