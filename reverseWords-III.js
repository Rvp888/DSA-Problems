
// Problem: Reverse Words in a String III:

// Given a string s, reverse the order of characters in each word within a sentence 
// while still preserving whitespace and initial word order.

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"


var reverseWords = function(s) {
    s = s.split(" ");

    for (let i = 0; i < s.length; i++) {
        s[i] = s[i].split("");
        s[i] = s[i].reverse();
        s[i] = s[i].join("");
    }

    return s.join(" ");
};