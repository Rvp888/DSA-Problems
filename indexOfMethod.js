
// Problem: Implement the indexOf method.


function indexOf(arr, target) {

    let start = 0, end = arr.length-1;

    while (start <= end) {
        let mid = start + Math.floor((end-start)/2);
        if (arr[mid] === target) {
            return mid;
        }
        else if (arr[mid] > target) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }

    return -1;

}

console.log(indexOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8));

