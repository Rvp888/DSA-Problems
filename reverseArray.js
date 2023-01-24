
// Question: Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.
// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

let s = ["h","e","l","l","o"];

var reverseString = function(s) {
    let i = 0, j = s.length-1;
    while(i < j){
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        i++;
        j--;
    }
    return s;
};

console.log(reverseString(s));