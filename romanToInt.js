// Roman to Integer:

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// Given a roman numeral, convert it to an integer.

// Example 1:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 2:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// Leetcode link: https://leetcode.com/problems/roman-to-integer/description/

// Solution:

var romanToInt = function(s) {
    
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'M') {
            if (s[i-1] === 'C') {
                result -= 200;
            }
            result += 1000;
        }
        else if (s[i] === 'D') {
            if (s[i-1] === 'C') {
                result -= 200;
            }
            result += 500;
        }
        else if (s[i] === 'C') {
            if (s[i-1] === 'X') {
                result -= 20;
            }
            result += 100;
        }
        else if (s[i] === 'L') {
            if (s[i-1] === 'X') {
                result -= 20;
            }
            result += 50;
        }
        else if (s[i] === 'X') {
            if (s[i-1] === 'I') {
                result -= 2;
            }
            result += 10;
        }
        else if (s[i] === 'V') {
            if (s[i-1] === 'I') {
                result -= 2;
            }
            result += 5;
        }
        else if (s[i] === "I") {
            result += 1;
        }
    }

    return result;

};

