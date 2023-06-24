// Lucky Numbers in a Matrix:

// Given an m x n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

// A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

// Example 1:

// Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
// Output: [15]
// Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column.

// Example 2:

// Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
// Output: [12]
// Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.

// Leetcode link: https://leetcode.com/problems/lucky-numbers-in-a-matrix/description/

// Solution:

var luckyNumbers  = function(matrix) {
    
    let luckyNumbers = [];

    for (let i = 0; i < matrix.length; i++) {
        let subMat = matrix[i];
        let min = Math.min(...subMat);
        let index = subMat.indexOf(min);
        let isLucky = true;
        for (let j = 0; j < matrix.length; j++) {
            let subArr = matrix[j];
            if (subArr[index] > min) {
                isLucky = false;
            }
        }
        if (isLucky) luckyNumbers.push(min);
    }

    return luckyNumbers;

};

console.log(luckyNumbers(matrix = [[3,7,8],[9,11,13],[15,16,17]]));

