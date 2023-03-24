
// Time Conversion:

// Problem:
// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example:
// s = '12:01:00PM'
// Return '12:01:00'.

// s = '12:01:00AM'
// Return '00:01:00'.


function timeConversion(str) {
    if(str.includes('AM')){
        if(str.startsWith('12')){
            str = str.replace('12', '00');
        }
        return str.slice(0, str.length-2);
    }
    else if(str.includes('PM')){
        if(!str.startsWith('12')){
            let temp = str.slice(0, 2);
            temp = Number(temp) + 12;
            return temp + str.slice(2, str.length-2);
        }
        return str.slice(0, str.length-2);
    }
}

console.log(timeConversion('12:01:00PM'));