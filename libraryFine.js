
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

// Example:
// d1,m1,y1 = 14,7,2018
// d2,m2,y2 = 5,7,2018

// The first values are the return date and the second are the due date. The years are the same and the months 
// are the same. The book is 14 - 5 = 9 days late. Return 9 * 15 = 135.