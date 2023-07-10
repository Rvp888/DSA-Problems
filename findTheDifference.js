// Find the Difference:

// You are given two strings s and t.

// String t is generated by random shuffling string s and then add one more letter at a random position.

// Return the letter that was added to t.

// Example 1:

// Input: s = "abcd", t = "abcde"
// Output: "e"
// Explanation: 'e' is the letter that was added.

// Example 2:

// Input: s = "", t = "y"
// Output: "y"

// Leetcode link: https://leetcode.com/problems/find-the-difference/description/

 // Solution-1:
 var findTheDifference = function(s, t) {
    
    t = t.split("");

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        let index = t.indexOf(char);
        t.splice(index, 1);
    }

    return t[0];

};

// TC => O(n^2)

console.log(findTheDifference(s = "abcd", t = "abcde"));



// Solution-2:
// var findTheDifference = function(s, t) {

//     s = s.split("");

//     for (let i = 0; i < t.length; i++) {
//         let char = t[i];
//         if (!s.includes(char)) {
//             return char;
//         }
//         let index = s.indexOf(char);
//         s.splice(index, 1);
//     }

// };

// //TC => O(n^2)

// console.log(findTheDifference(s = "", t = "y"));