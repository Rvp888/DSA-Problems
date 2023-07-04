// Distribute Candies:

// Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started 
// to gain weight, so she visited a doctor.

// The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her 
// candies very much, and she wants to eat the maximum number of different types of candies while still 
// following the doctor's advice.

// Given the integer array candyType of length n, return the maximum number of different types of candies 
// she can eat if she only eats n / 2 of them.

// Example 1:

// Input: candyType = [1,1,2,2,3,3]
// Output: 3
// Explanation: Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types, 
// she can eat one of each type.

// Example 2:

// Input: candyType = [1,1,2,3]
// Output: 2
// Explanation: Alice can only eat 4 / 2 = 2 candies. Whether she eats types [1,2], [1,3], 
// or [2,3], she still can only eat 2 different types.

// Leetcode link: https://leetcode.com/problems/distribute-candies/description/

// Solution:

var distributeCandies = function(candyType) {
    
    let n = candyType.length;
    let types = [];

    for (let i = 0; i < n; i++) {
        if (!types.includes(candyType[i])) {
            types.push(candyType[i]);
        }
    }

    if (n/2 > types.length) {
        return types.length;
    }
    else {
        return n/2;
    }

};

console.log(distributeCandies(candyType = [1,1,2,3]));
