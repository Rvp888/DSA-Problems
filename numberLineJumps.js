

// Problem:
// You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line 
// ready to jump in the positive direction (i.e, toward positive infinity).

// The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
// The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.
// You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. 
// If it is possible, return YES, otherwise return NO.

// Constraints:
//   0 <= x1 < x2 <= 10000
//   1 <= v1 <= 10000
//   1 <= v2 <= 10000

// Example:
//         Input         Output
//      x1 v1 x2 v2
//  1)   0  3  4  2       YES
//  2)   0  2  5  3       NO



function numberLineJumps(x1,v1,x2,v2){
    let length = x2;
    for(let i = 0; i <= length; i++){
        if (x1 == x2) {
            return "YES";
        }
        else if (v2 >= v1) {
            return "NO";
        }
        else {
            x1 += v1;
            x2 += v2;
        }
    }
    return "NO";
}

console.log(numberLineJumps(0,3,4,2))