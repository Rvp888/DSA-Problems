
// Palindrome Number
// Given an integer x, return true if x is a palindrome, and false otherwise.

// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.


// Solution-1:

// function isPalindrome (x) {

//     x = x.toString();
//     let left = 0, right = x.length-1;

//     while (left < right) {
//         if (x[left]!== x[right]) {
//             return false;
//         }
//         left++;
//         right--;
//     }

//     return true;

// }

// console.log(isPalindrome(101));


// Solution-2:

function isPalindrome (x) {

    if (x < 0 || (x && x % 10 === 0)) return false;

    let digits = [];

    while (x) {
        digits.push(x % 10);
        x = Math.floor(x / 10);
    }

    let left = 0, right = digits.length-1;

    while (left < right) {
        if (digits[left] !== digits[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;

}

console.log(isPalindrome(121));


