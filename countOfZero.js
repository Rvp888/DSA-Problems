
// Problem: Count of Zero:
// You have a sorted binary array.
// You have to find the count of zero present in the array.

// Example:
// Input :- [ 0, 0, 0, 0, 0, 1, 1, 1, 1 ]
// Output :- 5

function countOfZero (array) {

    let start = 0, end = array.length-1, count = 0;

    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (array[mid] === 1) {
            count = mid;
            end = mid-1;
        }
        else {
            start = mid+1;
        }
    }

    return count;

}

console.log(countOfZero([ 0, 0, 1, 1, 1, 1 ]));


