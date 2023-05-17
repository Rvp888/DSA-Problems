
// Problem: Given a sorted array but rotated. Find the index of given target number.

// Example:
// Input: arr = [4, 5, 6, 7, 0, 1, 2], target = 1.
// Output: 5.


function findIndex (arr, target) {

    let start = 0, end = arr.length-1;

    while(start <= end) {
        let mid = start + Math.floor((end-start) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        else if (target > arr[mid] || target <= arr[arr.length-1] && arr[mid] >= arr[arr.length-1]) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }

    return -1;

}

console.log(findIndex([4, 5, 6, 7, 0, 1, 2], 3));




