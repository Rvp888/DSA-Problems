// Count Largest Group:

// You are given an integer n.

// Each number from 1 to n is grouped according to the sum of its digits.

// Return the number of groups that have the largest size.

// Example 1:

// Input: n = 13
// Output: 4
// Explanation: There are 9 groups in total, they are grouped according sum of its digits of numbers from 1 to 13:
// [1,10], [2,11], [3,12], [4,13], [5], [6], [7], [8], [9].
// There are 4 groups with largest size.

// Example 2:

// Input: n = 2
// Output: 2
// Explanation: There are 2 groups [1], [2] of size 1.

// Leetcode link: https://leetcode.com/problems/count-largest-group/description/

// Solution:

var countLargestGroup = function(n) {
    
    let obj  ={};

    for (let i = 1; i <= n; i++) {
        let num = i;
        let newNum = 0;
        if (num < 10) newNum = num;
        else {
            num = num.toString();
            for (let j = 0; j < num.length; j++) {
                newNum += Number(num[j]);
            }
        }
        if (obj[newNum]) {
            obj[newNum]++;
        }
        else {
            obj[newNum] = 1;
        }
    }

    let values = Object.values(obj);
    let largest = Math.max(...values);
    let count = 0;

    for (let i = 0; i < values.length; i++) {
        if (values[i] === largest) {
            count++;
        }
    }

    return count;

};

console.log(countLargestGroup(n = 13));
