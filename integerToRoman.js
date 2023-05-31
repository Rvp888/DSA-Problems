// Integer to Roman:

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
//  I             1
//  V             5
//  X             10
//  L             50
//  C             100
//  D             500
//  M             1000

// Given an integer, convert it to a roman numeral.

// Example 1:
// Input: num = 3
// Output: "III"
// Explanation: 3 is represented as 3 ones.

// Example 2:
// Input: num = 58
// Output: "LVIII"
// Explanation: L = 50, V = 5, III = 3.

// Example 3:
// Input: num = 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// Constraints:

// 1 <= num <= 3999

// Solution:

var intToRoman = function(num) {
    let result = "";
    if (num / 1000 >= 1) {
        let thousands = Math.floor(num/1000);
        while(thousands) {
            result += "M";
            thousands--;
        }
    }
    num = num % 1000;
    if (num / 100 >= 1) {
        let hundreds = Math.floor(num/100);
        if (hundreds === 5) result += "D";
        if (hundreds < 5) {
            if (hundreds === 4) result += "CD";
            else {
                while(hundreds) {
                    result += "C";
                    hundreds--;
                }
            }
        }
        if (hundreds > 5) {
            if (hundreds === 9) result += "CM";
            else {
                result += "D";
                hundreds = hundreds - 5;
                while(hundreds) {
                    result += "C";
                    hundreds--;
                }
            }
        }
    }
    num = num % 100;
    if (num / 10 >= 1) {
        let tens = Math.floor(num/10);
        if (tens === 5) result += "L";
        if (tens < 5) {
            if (tens === 4) result += "XL";
            else {
                while(tens) {
                    result += "X";
                    tens--;
                }
            }
        }
        if (tens > 5) {
            if (tens === 9) result += "XC";
            else {
                result += "L";
                tens = tens - 5;
                while(tens) {
                    result += "X";
                    tens--;
                }
            }
        }
    }
    num = num % 10;
    if (num / 1 >= 1) {
        let ones = Math.floor(num/1);
        if (ones === 5) result += "V";
        if (ones < 5) {
            if (ones === 4) result += "IV";
            else {
                while(ones) {
                    result += "I";
                    ones--;
                }
            }
        }
        if (ones > 5) {
            if (ones === 9) result += "IX";
            else {
                result += "V";
                ones = ones - 5;
                while(ones) {
                    result += "I";
                    ones--;
                }
            }
        }
    }

    return result;
};

console.log(intToRoman(1994));