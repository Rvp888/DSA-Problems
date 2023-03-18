// Question: Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:
// Input: s = "hello"
// Output: "holle"

// Example 2:
// Input: s = "leetcode"
// Output: "leotcede"

let s = "leetcode";

const reverseVowels = function (s) {
  s = s.split("");
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let i = 0,
    j = s.length - 1;

  while (i < j) {
    if (vowels.includes(s[i]) && vowels.includes(s[j])) {
      let temp = s[i];
      s[i] = s[j];
      s[j] = temp;
    } else if (vowels.includes(s[i])) {
      j--;
      continue;
    } else if (vowels.includes(s[j])) {
      i++;
      continue;
    }
    i++;
    j--;
  }

  return s.join("");
};

console.log(reverseVowels(s));
