// Find Maximum Number of String Pairs:

// You are given a 0-indexed array words consisting of distinct strings.

// The string words[i] can be paired with the string words[j] if:

// * The string words[i] is equal to the reversed string of words[j].
// * 0 <= i < j < words.length.

// Return the maximum number of pairs that can be formed from the array words.

// Note that each string can belong in at most one pair.

// Example:

// Input: words = ["cd","ac","dc","ca","zz"]
// Output: 2
// Explanation: In this example, we can form 2 pair of strings in the following way:
// - We pair the 0th string with the 2nd string, as the reversed string of word[0] is "dc" and is equal to words[2].
// - We pair the 1st string with the 3rd string, as the reversed string of word[1] is "ca" and is equal to words[3].
// It can be proven that 2 is the maximum number of pairs that can be formed.

// Leetcode link: https://leetcode.com/problems/find-maximum-number-of-string-pairs/description/

// Solution:

var maximumNumberOfStringPairs = function(words) {
    
    let count = 0;

    for (let i = 0; i < words.length-1; i++) {
        let str1 = words[i];
        for (let j = i+1; j < words.length; j++) {
            let str2 = words[j];
            str2 = str2.split("");
            str2 = str2.reverse();
            str2 = str2.join("");
            if (str1 === str2) {
                count++;
            }
        }
    }

    return count;

};


