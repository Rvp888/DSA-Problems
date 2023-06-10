// Determine Color of a Chessboard Square

// You are given coordinates, a string that represents the coordinates of a square of the chessboard. 
// Below is a chessboard for your reference.

// Return true if the square is white, and false if the square is black.

// The coordinate will always represent a valid chessboard square. The coordinate will always have the letter 
// first, and the number second.

// Example 1:
// Input: coordinates = "a1"
// Output: false
// Explanation: From the chessboard above, the square with coordinates "a1" is black, so return false.

// Example 2:
// Input: coordinates = "h3"
// Output: true
// Explanation: From the chessboard above, the square with coordinates "h3" is white, so return true.

// Solution:

var squareIsWhite = function(coordinates) {
    
    let letters = " abcdefgh";

    let index1 = letters.indexOf(coordinates[0]);
    let index2 = coordinates[1];

    if (index1 % 2 !== 0) {
        if (index2 % 2 === 0) return true;
        else return false;
    }
    else {
        if (index2 % 2 !== 0) return true;
        else return false;
    }

};

console.log(squareIsWhite("a1"));
