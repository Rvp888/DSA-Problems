
// Problem: Given an sorted array of integers, return the counts of a given integer.

// Example:
// Input: array = [1, 1, 3, 3, 3, 4, 4, 5, 5, 5, 5], value = 4;
// Output: 2;

// Solution:



function countsOfInteger(array, value) {

    let firstInd = firstIndex (array, value);
    let lastInd = lastIndex (array, value, firstInd);

    return count = lastInd - firstInd + 1;

}

console.log(countsOfInteger([1, 1, 3, 3, 3, 4, 4, 5, 5, 5, 5], 4));



function firstIndex (array, value) {

    let firstIndex = 0;
    let start = 0, end = array.length-1;

    while (start <= end)  {
        let mid = start + Math.floor((end-start) / 2);
        if (array[mid] === value) {
            firstIndex = mid;
            end = mid-1;
        }
        else if (array[mid] > value) {
            end = mid-1;
        }
        else {
            start = mid+1;
        }
    }

    return firstIndex;

}

function lastIndex (array, value, start) {

    let end = array.length-1, lastIndex = 0;

    while (start <= end) {
        let mid = start + Math.floor((end-start) / 2);
        if (array[mid] === value) {
            lastIndex = mid;
            start = mid + 1;
        }
        else if (array[mid] < value) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }

    return lastIndex;

}

