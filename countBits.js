// Counting Bits:

// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n),
// ans[i] is the number of 1's in the binary representation of i.

// Example 1:

// Input: n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10

// Example 2:

// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101

// Leetcode link: https://leetcode.com/problems/counting-bits/description/

// Solution:

var countBits = function (n) {
  let result = [];

  for (let i = 0; i <= n; i++) {
    if (i === 0) result.push(0);
    else {
      let temp = i;
      let count = 0;
      while (temp > 1) {
        let mod = temp % 2;
        if (mod === 1) count++;
        let quot = Math.floor(temp / 2);
        temp = quot;
      }
      count++;
      result.push(count);
    }
  }

  return result;
};

console.log(countBits((n = 5)));
