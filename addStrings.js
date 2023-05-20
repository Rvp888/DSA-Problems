
// Add Strings

// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). 
// You must also not convert the inputs to integers directly.

// Example 1:
// Input: num1 = "11", num2 = "123"
// Output: "134"

// Example 2:
// Input: num1 = "456", num2 = "77"
// Output: "533"


// Solution:

function addstrings (num1, num2) {

    let i = num1.length-1;
    let j = num2.length-1;
    let carry = 0;
    let sum = "";

    while (i >= 0 || j >= 0 || carry > 0) {

        let digit1 = i < 0 ? 0 : num1[i] - "0";
        let digit2 = j < 0 ? 0 : num2[j] - "0";
        let digitsSum = digit1 + digit2 + carry;
        sum = (digitsSum % 10) + sum;
        carry = Math.floor(digitsSum / 10);

        i--, j--;

    } 

    return sum;

}

console.log(addstrings("11", "123"));
