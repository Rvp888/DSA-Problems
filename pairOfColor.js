
// Problem:
// There is a large pile of socks that must be paired by color. Given an array of integers representing 
// the color of each sock, determine how many pairs of socks with matching colors there are.

// Example:
// arr = [1,2,1,2,1,3,2]
// There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.


let arr = [20, 10, 30, 10, 20, 10, 10, 20, 30, 30];


function numOfPairs(arr) {
    let obj = {};
    let pairs = 0;

    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            pairs++;
            delete obj[arr[i]];
        }
        else {
            obj[arr[i]] = true;
        }    
    }
    return pairs;
}

console.log(numOfPairs(arr));