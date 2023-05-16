
// Problem: Given an integer 'N', print the first N fibonacci numbers (separated by comma(,) and space).

// Solution:


function fibonacciNumbers (N) {

    let fiboString = '';
    let first = 0;
    let second = 1;
    let third = 0;

    for (let i = 1; i <= N; i++) {
        if (i === N) fiboString = fiboString + third;
        else fiboString = fiboString + third + "," + " ";
        
        if (i > 2) {
            first = second;
            second = third;
        }
        third = first + second;
    }

    return fiboString;

}

console.log(fibonacciNumbers(10));