
// Problem: Given an Array, a start index and an end index, change all 
// the elements to zero from start index to end index.

// Example:

// input: [2, 5, 10, 7, 5] and 2 and 3;

// output: [2, 5, 0, 7, 5]

function changeToZero (arr,s,e) {

    for (let i = s; i < e; i++) {
        arr[i] = 0;
    }

    return arr;

}

console.log(changeToZero([2, 5, 10, 7, 5, 6, 4, 9], 1, 5));



