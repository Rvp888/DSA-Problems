// Minimum Time to Type Word Using Special Typewriter:

// There is a special typewriter with lowercase English letters 'a' to 'z' arranged in a 
// circle with a pointer. A character can only be typed if the pointer is pointing to that 
// character. The pointer is initially pointing to the character 'a'.


// Each second, you may perform one of the following operations:

// => Move the pointer one character counterclockwise or clockwise.
// => Type the character the pointer is currently on.

// Given a string word, return the minimum number of seconds to type out the characters in word.

// Example 1:

// Input: word = "abc"
// Output: 5
// Explanation: 
// The characters are printed as follows:
// - Type the character 'a' in 1 second since the pointer is initially on 'a'.
// - Move the pointer clockwise to 'b' in 1 second.
// - Type the character 'b' in 1 second.
// - Move the pointer clockwise to 'c' in 1 second.
// - Type the character 'c' in 1 second.

// Example 2:

// Input: word = "zjpc"
// Output: 34
// Explanation:
// The characters are printed as follows:
// - Move the pointer counterclockwise to 'z' in 1 second.
// - Type the character 'z' in 1 second.
// - Move the pointer clockwise to 'j' in 10 seconds.
// - Type the character 'j' in 1 second.
// - Move the pointer clockwise to 'p' in 6 seconds.
// - Type the character 'p' in 1 second.
// - Move the pointer counterclockwise to 'c' in 13 seconds.
// - Type the character 'c' in 1 second.

// Leetcode link: https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/description/

// Solution:

var minTimeToType = function(word) {

    let counts = 0;

    let alphas1 = { 'z': -1, 'y': -2, 'x': -3, 'w': -4, 'v': -5, 'u': -6, 't': -7, 's': -8, 'r': -9, 'q': -10, 'p': -11, 'o': -12, 'n': -13, 'm': -14, 'l': -15, 'k': -16, 'j': -17, 'i': -18,
    'h': -19, 'g': -20, 'f': -21, 'e': -22, 'd': -23, 'c': -24, 'b': -25, 'a': -26 };
    let alphas2 = {'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5,
    'g': 6, 'h': 7, 'i': 8, 'j': 9, 'k': 10, 'l': 11, 'm': 12, 'n': 13, 'o': 14, 'p': 15, 'q': 16, 'r': 17,'s': 18, 't': 19, 'u': 20, 'v': 21, 'w': 22, 'x': 23, 'y': 24, 'z': 25 };

    let currChar = 'a';

    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        let diff1 = Math.abs(alphas1[currChar] - alphas1[char]);
        let diff2 = Math.abs(alphas1[currChar] - alphas2[char]);
        let diff3 = Math.abs(alphas2[currChar] - alphas1[char]);
        let diff4 = Math.abs(alphas2[currChar] - alphas2[char]);
        counts += Math.min(diff1, diff2, diff3, diff4);
        currChar = char;
    }

    return counts + word.length;

};

