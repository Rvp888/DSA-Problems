
// Counting Valleys:

// Problem:
// An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly 'steps' steps, for every step 
// it was noted if it was an uphill,'U' , or a downhill, 'D' step. Hikes always start and end at sea level, and each step up or 
// down represents a 1 unit change in altitude. We define the following terms:

// => A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level 
// and ending with a step down to sea level.
// => A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level 
// and ending with a step up to sea level.

// Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

// Example:
// steps = 8
// path = 'DDUUUUDD'

// The hiker first enters a valley 2 units deep. Then they climb out and up onto a mountain 2 units high. 
// Finally, the hiker returns to sea level and ends the hike. Total valley covered is 1.
// Ans = 1;


function countingValleys(steps, path) {

    let ans = 0;
    let stack = [];

    for(let i = 0; i < steps; i++){
        if(path[i] === 'D'){
            if(stack[stack.length-1] === 'U'){
                stack.pop();
            }
            else {
                stack.push(path[i]);
            }
        }
        else if(path[i] === 'U'){
            if(stack[stack.length-1] === 'D'){
                stack.pop();
                console.log(stack);
                if(stack.length === 0){
                    ans++;
                }
            }
            else {
                stack.push(path[i]);
            }
        }
    }

    return ans;
}

console.log(countingValleys(8, 'DUDUDUDU'));