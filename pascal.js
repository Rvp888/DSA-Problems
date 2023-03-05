
// Problem: You are given an integer N. Your task is to return a 2-D array list containing the
//          Pascal's triangle till the row N.

// A Pascal's triangle is a triangular array constructed by summing adjacent elements in preceding rows.

// Ex:        1
    //       1 1
    //      1 2 1
    //     1 3 3 1
    //    1 4 6 4 1
    //   1 5 10 10 5 1    


function printPascal(N) {
    let pascalArr = [];

    pascalArr[0] = [1];
    if(N == 1) return pascalArr;

    pascalArr[1] = [1,1];
    if(N == 2) return pascalArr;

    for(let i = 2; i < N; i++){
        pascalArr[i] = nextPascalRow(pascalArr[i-1]);
    }
    return pascalArr;
}

console.log(printPascal(4));


function nextPascalRow(arr) {
    let newArr = [];
    newArr.push(1);
    for(let i = 1; i < arr.length; i++){
        newArr[i] = arr[i-1] + arr[i];
    }
    newArr.push(1);
    return newArr;
}

// console.log(nextPascalRow([1,2,3,2,1]));