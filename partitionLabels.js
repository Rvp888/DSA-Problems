// Partition Labels:

// You are given a string s. We want to partition the string into as many parts as 
// possible so that each letter appears in at most one part.

// Note that the partition is done so that after concatenating all the parts in order, 
// the resultant string should be s.

// Return a list of integers representing the size of these parts.

// Example 1:

// Input: s = "ababcbacadefegdehijhklij"
// Output: [9,7,8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.

// Example 2:

// Input: s = "eccbbbbdec"
// Output: [10]

// Leetcode link: https://leetcode.com/problems/partition-labels/description/

// Solution:

var partitionLabels = function(s) {
    
    let result = [];

    while (s.length) {
        let leftPart = s[0];
        s = s.slice(1);
        for (let i = 0; i < leftPart.length; i++) {
            let char = leftPart[i];
            if (s.includes(char)) {
                let lastIndex = s.lastIndexOf(char);
                leftPart += s.slice(0, lastIndex+1);
                s = s.slice(lastIndex+1);
            }
            if (s.length == 0) break;
        }
        result.push(leftPart.length);
    }

    return result;

};




