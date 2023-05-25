
// Day of the Year

// Given a string date representing a 'Gregorian calendar' date formatted as YYYY-MM-DD, return the day number of the year.

// Example 1:
// Input: date = "2019-01-09"
// Output: 9
// Explanation: Given date is the 9th day of the year in 2019.

// Example 2:
// Input: date = "2019-02-10"
// Output: 41

// Constraints:
// 'date' represents a calendar date between Jan 1st, 1900 and Dec 31th, 2019.


// Solution:

function dayOfYear (date) {

    let dayNumber = 0;
    let isLeapYear = false;
    let monthDaysArr = [31,28,31,30,31,30,31,31,30,31,30,31];
    let dateDays = Number(date.slice(8,10));
    let month = Number(date.slice(5,7));
    let year = Number(date.slice(0,4));
    let monthDays = 0;

    for (let i = 0; i < month-1; i++) {
        monthDays += monthDaysArr[i];
    }

    dayNumber = dateDays + monthDays;

    for (let i = 1904; i < 2020; i += 4) {
        if (i === year) {
            isLeapYear = true;
        }
    } 

    if (isLeapYear && month > 2) {
        dayNumber += 1;
    }

    return dayNumber;

}

console.log(dayOfYear("2004-03-01"));

