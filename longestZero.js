
// Problem: Longest Zero

// You are given a binary string (containing '0' and '1' only). 
// Return the logest sequence of consecutive zeroes.

// Example 1:

// Input: "101100001010000"

// Output: "0000"

// Solution:


function longestZero (string) {

    let zerCount = 0;
    let maxZeroes = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === '0') {
            zerCount++;
        }
        else {
            if (zerCount > maxZeroes) {
                maxZeroes = zerCount;
            }
            zerCount = 0;
        }
    }
    if (zerCount > maxZeroes) {
        maxZeroes = zerCount;
    }

    let longestZero = "";
    for (let i = 0; i < maxZeroes; i++) {
        longestZero += '0';
    }

    return longestZero;

}

console.log(longestZero("101100001010000"));

