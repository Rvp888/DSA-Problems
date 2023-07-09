// Rank Transform of an Array:

// Given an array of integers arr, replace each element with its rank.

// The rank represents how large the element is. The rank has the following rules:

// * Rank is an integer starting from 1.

// * The larger the element, the larger the rank. If two elements are equal, their rank must be the same.

// * Rank should be as small as possible.

// Example 1:

// Input: arr = [40,10,20,30]
// Output: [4,1,2,3]
// Explanation: 40 is the largest element. 10 is the smallest. 
// 20 is the second smallest. 30 is the third smallest.

// Example 2:

// Input: arr = [100,100,100]
// Output: [1,1,1]
// Explanation: Same elements share the same rank.

// Example 3:

// Input: arr = [37,12,28,9,100,56,80,5,12]
// Output: [5,3,4,2,8,6,7,1,3]

// Leetcode link: https://leetcode.com/problems/rank-transform-of-an-array/description/

// Solution:

var arrayRankTransform = function(arr) {
    
    let temp = [...arr];
    temp = temp.sort((a, b) => a - b);

    for (let i = 0; i < temp.length; i++) {
        if (temp[i] === temp[i+1]) {
            temp.splice(i, 1);
            i--;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let index = temp.indexOf(num);
        arr[i] = index + 1;
    }

    return arr;

};


