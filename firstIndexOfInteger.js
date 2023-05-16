
// problem: Given an array of integers, return the first index of the given integer.

// Example:
// Input: array = [1, 1, 3, 3, 3, 4, 4, 5, 5, 5, 5], value = 4;
// Output: 5;

// Solution:

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

console.log(firstIndex([1, 1, 3, 3, 3, 4, 4, 5, 5, 5, 5], 5));

