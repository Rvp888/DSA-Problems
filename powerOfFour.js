
// Problem: Given an integer n, return true if it is a power of four. Otherwise, return false.
// An integer n is a power of four, if there exists an integer x such that n == 4x.

// Example 1:
// Input: n = 16
// Output: true

// Example 2:
// Input: n = 5
// Output: false

// Example 3:
// Input: n = 1
// Output: true

// Solution-1:

// function powerOfFour (n) {

//     if (n % 4 !== 0 && n !== 1) return false;

//     for (let i = 0; i < n; i++) {
//         if (4**i === n) {
//             return true;
//         }
//         else if (4**i > n) {
//             return false;
//         }
//     }

//     return false;

// }

// console.log(powerOfFour(32));


// Solution-2:

// function powerOfFour (n) {
//     if (n === 1) return true;

//     if ((n & (n-1)) === 0 && (n % 10 === 4 || n % 10 === 6)) {
//         return true;
//     }

//     return false;
// }

// console.log(powerOfFour(16));



// Solution-3:

function powerOfFour (n) {

    n = n.toString(2);

    if (n[0] === "1" && n.length % 2 !== 0 && n.indexOf("1", 1) === -1) {
        return true;
    }

    return false;

}

console.log(powerOfFour(32));

