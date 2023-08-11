// Strictly Palindromic Number:

// An integer n is strictly palindromic if, for every base b between 2 and n - 2 (inclusive), 
// the string representation of the integer n in base b is palindromic.

// Given an integer n, return true if n is strictly palindromic and false otherwise.

// A string is palindromic if it reads the same forward and backward.

// Example 1:

// Input: n = 9
// Output: false
// Explanation: In base 2: 9 = 1001 (base 2), which is palindromic.
// In base 3: 9 = 100 (base 3), which is not palindromic.
// Therefore, 9 is not strictly palindromic so we return false.
// Note that in bases 4, 5, 6, and 7, n = 9 is also not palindromic.

// Example 2:

// Input: n = 4
// Output: false
// Explanation: We only consider base 2: 4 = 100 (base 2), which is not palindromic.
// Therefore, we return false.

// Leetcode link: https://leetcode.com/problems/strictly-palindromic-number/description/

// Solution:

var isStrictlyPalindromic = function(n) {

    function checkPalindrome (str) {
        let i = 0, j = str.length-1;
        while (i < j) {
            if (str[i] != str[j]) {
                return false;
            }
            i++, j--;
        }
        return true;
    }
    
    for (let i = 2; i <= n-2; i++) {
        let string = "";
        let num = n;
        while (num > 0) {
            let modulus = num % i;
            string = modulus + string;
            let quotient = Math.floor(num / i);
            num = quotient;
        }
        let isPalindrome = checkPalindrome(string);
        if (isPalindrome == false) {
            return false;
        }
    }

    return true;

};

// TC => O(n^2)
// SC => O(n)

console.log(isStrictlyPalindromic(n = 9));

