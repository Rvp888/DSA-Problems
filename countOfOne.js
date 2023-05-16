
// Problem: Count of One:
// You have a sorted binary array.
// You have to find the count of one present in the array.

// Example:
// Input :- [ 0, 0, 0, 0, 0, 1, 1, 1, 1 ]
// Output :- 4

// Solution:


function countOfOne (array) {

    let start = 0, end = array.length-1, count = 0; firstIndex = 0;

    while(start <= end) {
        let mid = start + Math.floor((end-start)/2);
        if (array[mid] === 1) {
            firstIndex = mid;
            end = mid-1;
        }
        else {
            start = mid+1;
        }
    }

    return count = array.length - firstIndex;

}

console.log(countOfOne([ 0, 0, 0, 0, 0, 1, 1, 1 ]));


