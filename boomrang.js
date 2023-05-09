
// Problem: A V-shaped pattern that can be upright or inverted is known as boomerang.
// A boomerang is specifically described as a sub-array of length three with a different 
// middle digit and the same first and last digits.
// You are given an array, return the total number of boomerang present in the array.
// Note: Boomerang can be overlapping in the array.

// Example:
// Input:
// [3,7,3,2,1,5,1,2,2,-2,2]

// Output:
// 3;

// Explanation:
// 3 boomerangs in this sequence: [3,7,3], [1,5,1] and [2,-2,2];


function boomerang (arr) {

    let boomerangs = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i+1] && arr[i] === arr[i+2]) {
            boomerangs++;
        }
    }

    return boomerangs;

}

console.log(boomerang([1,7,1,7,1,7,1]));
