
// problem: Given an array of integers, return the last index of the given integer.

// Example:
// Input: array = [1, 1, 3, 3, 3, 4, 4, 5, 5, 5, 5], value = 4;
// Output: 6;

//Solution:

function lastIndex (array, value) {

    let start = 0, end = array.length-1, lastIndex = 0;

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

console.log(lastIndex([1, 1, 3, 3, 3, 4, 4, 5, 5, 5, 5], 3));

