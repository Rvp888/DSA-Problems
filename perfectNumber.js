
// Perfect Number:
// A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. 
// A divisor of an integer x is an integer that can divide x evenly.

// Given an integer n, return true if n is a perfect number, otherwise return false.


// Example 1:
// Input: num = 28
// Output: true
// Explanation: 28 = 1 + 2 + 4 + 7 + 14
// 1, 2, 4, 7, and 14 are all divisors of 28.

// Example 2:
// Input: num = 7
// Output: false


// Solution-1:

// function isPerfectNumber (num) {

//     let sum = 0;
//     for (let i = 1; i <= num/2; i++) {
//         if (num % i === 0) {
//             sum += i;
//         }
//     }
//     if (sum === num) {
//         return true;
//     }
//     return false;

// }

// console.log(isPerfectNumber(7));


// Solution-2:

function isPerfectNumber (num) {
    let sum = 1;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum = sum + i + (num/i);
        }
    }

    return num > 1 && sum === num;
}

console.log(isPerfectNumber(28));
