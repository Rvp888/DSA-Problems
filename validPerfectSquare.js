// Valid Perfect Square

// Given a positive integer num, return true if num is a perfect square or false otherwise.

// A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.

// You must not use any built-in library function, such as sqrt.


// Solution:

function isPerfectSquare (num) {

    for (let i = 0; i <= Math.round(num/2); i++) {
        if (i*i === num) {
            return true;
        }
        else if (i*i > num) {
            return false;
        }
    }

    return false;

}

console.log(isPerfectSquare(7));


