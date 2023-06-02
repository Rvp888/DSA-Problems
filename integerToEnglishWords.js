// Integer to English Words:

// Convert a non-negative integer num to its English words representation.

// Example 1:
// Input: num = 123
// Output: "One Hundred Twenty Three"

// Example 2:
// Input: num = 12345
// Output: "Twelve Thousand Three Hundred Forty Five"

// Example 3:
// Input: num = 1234567
// Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"

// Leetcode link:- https://leetcode.com/problems/integer-to-english-words/

// Solution:

const numberToWords = function(num) {
    
    if(num === 0) return 'Zero';
    
    const DIGITS_WORDS = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const TEN_TO_TWENTY_WORDS = ['', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const TENS_WORDS = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    
    const HUNDRED = 'Hundred'
    const RANKS = ['', 'Thousand', 'Million', 'Billion'];
    
    let getPart = (n, rank) => {
        
        let onesWord = '';
        let tensWord = '';
        let hundredsWord = n > 99 ? DIGITS_WORDS[Math.floor(n/100)] + (' ' + HUNDRED + ' ') : '';
        
        if(n % 100 > 10 && n % 100 < 20){
            tensWord = TEN_TO_TWENTY_WORDS[n % 100 % 10] + (TEN_TO_TWENTY_WORDS[n % 100 % 10] ? ' ' : '');
        } else {
            onesWord = DIGITS_WORDS[n % 10] + (DIGITS_WORDS[n % 10] ? ' ' : '');
            tensWord = TENS_WORDS[Math.floor(n/10) % 10] + (TENS_WORDS[Math.floor(n/10) % 10] ? ' ' : '');
        }

        return hundredsWord + tensWord + onesWord + ((hundredsWord || tensWord || onesWord) ? RANKS[rank] : '');
    }
    
    let groups = [];
    
    for(let i = 0; num; num = Math.floor(num / 1000), i++){
        let hundreeds = num % 1000;
        let subRes = getPart(hundreeds, i);
        if(subRes) groups.push(subRes);
    }
    
    return groups.reverse().join(' ').trim();
};


console.log(numberToWords(3999999));

