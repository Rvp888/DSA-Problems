// Sum of Digits in Base K:

// Given an integer n (in base 10) and a base k, return the sum of the digits of n after converting n from base 10 to base k.

// After converting, each digit should be interpreted as a base 10 number, and the sum should be returned in base 10.

// Example 1:

// Input: n = 34, k = 6
// Output: 9
// Explanation: 34 (base 10) expressed in base 6 is 54. 5 + 4 = 9.

// Example 2:

// Input: n = 10, k = 10
// Output: 1
// Explanation: n is already in base 10. 1 + 0 = 1.

// Leetcode link: https://leetcode.com/problems/sum-of-digits-in-base-k/description/

// Solution:

var sumBase = function(n, k) {
    
    // Conversion from decimal to other bases
    // 1. We divide the decimal number by base repeatedly until the quotient becomes 0.
    // 2. Then we write the remainders from last to first.
    
    let result = 0;
    let numOfBaseK = "";

    while(n > 0) {
        let remainder = n % k;
        numOfBaseK = remainder + numOfBaseK;
        n = Math.floor(n / k);
    }

    for (let i = 0; i < numOfBaseK.length; i++) {
        result += Number(numOfBaseK[i]);
    }

    return result;

};

