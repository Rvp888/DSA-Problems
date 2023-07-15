// Rearrange Characters to Make Target String:

// You are given two 0-indexed strings s and target. You can take some letters from s and rearrange them to form new strings.

// Return the maximum number of copies of target that can be formed by taking letters from s and rearranging them.

// Example 1:

// Input: s = "ilovecodingonleetcode", target = "code"
// Output: 2
// Explanation:
// For the first copy of "code", take the letters at indices 4, 5, 6, and 7.
// For the second copy of "code", take the letters at indices 17, 18, 19, and 20.
// The strings that are formed are "ecod" and "code" which can both be rearranged into "code".
// We can make at most two copies of "code", so we return 2.

// Example 2:

// Input: s = "abbaccaddaeea", target = "aaaaa"
// Output: 1
// Explanation:
// We can make one copy of "aaaaa" by taking the letters at indices 0, 3, 6, 9, and 12.
// We can make at most one copy of "aaaaa", so we return 1.

// Leetcode link: https://leetcode.com/problems/rearrange-characters-to-make-target-string/description/

// Solution:

var rearrangeCharacters = function(s, target) {
    
    s = s.split("");
    let count = 0;
    while (true) {
        for (let i = 0; i < target.length; i++) {
            let char = target[i];
            if (!s.includes(char)) {
                return count;
            }
            else {
                let index = s.indexOf(char);
                s.splice(index, 1);
            }
        }
        count++;
    }
    
    return count;

};

console.log(rearrangeCharacters(s = "ilovecodingonleetcode", target = "code"));

