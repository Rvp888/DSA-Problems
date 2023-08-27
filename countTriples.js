// Count Square Sum Triples:

// A square triple (a,b,c) is a triple where a, b, and c are integers and a2 + b2 = c2.

// Given an integer n, return the number of square triples such that 1 <= a, b, c <= n.

// Example 1:

// Input: n = 5
// Output: 2
// Explanation: The square triples are (3,4,5) and (4,3,5).

// Example 2:

// Input: n = 10
// Output: 4
// Explanation: The square triples are (3,4,5), (4,3,5), (6,8,10), and (8,6,10).

// Leetcode link: https://leetcode.com/problems/count-square-sum-triples/description/

// Solution-1:

var countTriples = function (n) {
  let result = 0;

  for (let a = 3; a < n; a++) {
    for (let b = a + 1; b < n; b++) {
      let c = Math.sqrt(a * a + b * b);
      if (Number.isInteger(c) && c <= n) {
        result += 2;
      }
    }
  }

  return result;
};

console.log(countTriples((n = 10)));

// TC => O(n^2)
// SC => O(1)

// -----------------------------------------

// Solution-2:

// var countTriples = function(n) {

//     let result = 0;

//     for (let a = 3; a <= n; a++) {
//         for (let b = a+1; b <= n; b++) {
//             for (let c = b+1; c <= n; c++) {
//                 if ((a**2 + b**2) == c**2) {
//                     result += 2;
//                 }
//             }
//         }
//     }

//     return result;

// };

// TC => O(n^3)
// SC => O(1)
