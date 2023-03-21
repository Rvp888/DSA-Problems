
// Problem:
// Reduce a string of lowercase characters in range ascii[‘a’..’z’]by doing a series of operations. 
// In each operation, select a pair of adjacent letters that match, and delete them.

// Delete as many characters as possible using this method and return the resulting string. 
// If the final string is empty, return Empty String.

// Example:
// s = 'aab'
// aab shortens to b in one operation: remove the adjacent a characters.

// s = 'abba'
// Remove the two 'b' characters leaving 'aa'. Remove the two 'a' characters to leave ''. Return 'Empty String'.


function superReducedString(str) {
    let reducer = [];

    for(let i = 0; i < str.length; i++){
        if (str[i] == reducer[reducer.length-1]) {
            reducer.pop();
        }
        else {
            reducer.push(str[i]);
        }
    }

    if (reducer.length) {
        return reducer.join("");
    }

    return "Empty String";
}

console.log(superReducedString('abbac'));