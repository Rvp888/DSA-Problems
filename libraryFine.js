
// Library Fine:

// Problem:
// Your local library needs your help! Given the expected and actual return dates for a library book, create a 
// program that calculates the fine (if any). The fee structure is as follows:

// 1. If the book is returned on or before the expected return date, no fine will be charged (i.e.: fine = 0).
// 2. If the book is returned after the expected return day but still within the same calendar month and year as 
//    the expected return date, the fine = 15 x (the number of days late).
// 3. If the book is returned after the expected return month but still within the same calendar year as the 
//    expected return date, the fine = 500 x (the number of months late).
// 4. If the book is returned after the calendar year in which it was expected, there is a fixed fine of 10000.

// Example-1:
// d1,m1,y1 = 14,7,2018
// d2,m2,y2 = 5,7,2018

// The first values are the return date and the second are the due date. The years are the same and the months 
// are the same. The book is 14 - 5 = 9 days late. Return 9 * 15 = 135.

// Example-2:
// d1,m1,y1 = 14,9,2018
// d2,m2,y2 = 5,7,2018

// The years are the same but the book is 9 - 7 = 2 months late. Return 2 * 500 = 1000.

// Example-3:
// d1,m1,y1 = 14,9,2019
// d2,m2,y2 = 5,7,2018

// The book is 2019 - 2018 = 1 year late. Return 10000.


function libraryFine(d1, m1, y1, d2, m2, y2) {
    let ans = 0;

    if (y1 - y2 > 0) {
        ans += 10000 * (y1 - y2);
    }
    else if(y1 == y2) {
        if(m1 - m2 > 0) {
            ans += 500 * (m1 - m2);
        }
        else if(m1 == m2 && d1 -d2 > 0) {
            ans += 15 * (d1 - d2)
        }
    }

    return ans;
}

console.log(libraryFine(14,9,2019,5,7,2018));

console.log(libraryFine(14,9,2018,5,7,2018));

console.log(libraryFine(14,7,2018,5,7,2018));


