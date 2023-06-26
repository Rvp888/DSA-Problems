// Goat Latin:

// You are given a string sentence that consist of words separated by spaces. Each word 
// consists of lowercase and uppercase letters only.

// We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.) 
// The rules of Goat Latin are as follows:

// * If a word begins with a vowel ('a', 'e', 'i', 'o', or 'u'), append "ma" to the end of the word.
//   For example, the word "apple" becomes "applema".
// * If a word begins with a consonant (i.e., not a vowel), remove the first letter and append it to the end, then add "ma".
//   For example, the word "goat" becomes "oatgma".
// * Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
//   For example, the first word gets "a" added to the end, the second word gets "aa" added to the end, and so on.

// Return the final sentence representing the conversion from sentence to Goat Latin.

// Example:

// Input: sentence = "I speak Goat Latin"
// Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"

// Leetcode link: https://leetcode.com/problems/goat-latin/description/

// Solution:

var toGoatLatin = function(sentence) {
    
    let vowels = "aeiouAEIOU";
    sentence = sentence.split(" ");
    let addOns = "a";

    for (let i = 0; i < sentence.length; i++) {
        let word = sentence[i];
        if (vowels.includes(word[0])) {
            word += "ma";
        }
        else {
            word = word.split("");
            word.push(word.shift());
            word = word.join("");
            word += "ma";
        }
        word += addOns;
        sentence[i] = word;
        addOns += "a";
    }

    return sentence.join(" ");

};

console.log(toGoatLatin(sentence = "I speak Goat Latin"));

