

// Problem:
// There will be two arrays of integers. Determine all integers that satisfy the following two conditions:

// 1. The elements of the first array are all factors of the integer being considered
// 2. The integer being considered is a factor of all elements of the second array

// These numbers are referred to as being between the two arrays. Determine how many such numbers exist.

// Example:
// a = [2, 6]
// b = [24, 36]

// There are two numbers between the arrays: 6 and 12.
// 6 % 2 = 0,   6 % 6 = 0 and  24 % 6 = 0,  36 % 6 = 0
// 12 % 2 = 0, 12 % 6 = 0 and 24 % 12 = 0, 36 % 12 = 0

// Ans = 2.


let arr1 = [2, 4];
let arr2 = [16, 32, 96];

function commonDividendAndFactor(arr1, arr2) {

    let minArr2 = Math.min(...arr2);
    let dividends = [];
    let ansCount = 0;

    for (let i = 1; i <= minArr2; i++) {
        let isDivisible = true;
        for (let j = 0; j < arr1.length; j++) {
            if (i % arr1[j] != 0) {
                isDivisible = false;
            }
        }
        if (isDivisible) {
            dividends.push(i);
        }
    }

    for (let i = 0; i < dividends.length; i++) {
        let isFactor = true;
        for (let j = 0; j < arr2.length; j++) {
            if (arr2[j] % dividends[i] != 0) {
                isFactor = false;
            }
        }
        if (isFactor) {
            ansCount++;
        }
    }

    return ansCount;
}


console.log(commonDividendAndFactor(arr1, arr2));