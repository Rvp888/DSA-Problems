

// Problem:

// Sansa has an array. She wants to find the value obtained by XOR-ing the contiguous subarrays, 
// followed by XOR-ing the values thus obtained. Determine this value.

// Example:
// arr = [3, 4, 5]

// Sub-Arrays    Operation        Result

// 3              None             3
// 4              None             4
// 5              None             5
// 3,4           3 XOR 4           7
// 4,5           4 XOR 5           1
// 3,4,5         3 XOR 4 XOR 5     2

// Now we take the resultant values and XOR them together:

// 3 XOR 4 XOR 5 XOR 7 XOR 1 XOR 2 = 6. Ans = 6;


let arr = [3, 4, 5];
let arr2 = [98, 74, 12];

function xoringSubArrays(arr) {
    let ans = 0;
    for(let i = 0; i < arr.length; i++){
        let frequencyOfNum = (arr.length - i) * (i + 1);    // frequency of a number in contiguous sub-arrays of an array:
        if(frequencyOfNum % 2 != 0){                        // frequencyOfNum = (array.length - index) * (index + 1);
            ans = ans ^ arr[i];
        }
    }
    return ans;
}

console.log(xoringSubArrays(arr2));





// XOR concept:

// Decimal to Binary conversion:

// Divide the given decimal number by 2
// Join the quotient and remainders
// Example:

//         quotient  remainder
// 8/2 =>     4         0
// 4/2 =>     2         0
// 2/2 =>     1         0
// Binary of 8 = 1000

// 5/2 =>     2         1
// 2/2 =>     1         0
// Binary of 5 = 101


// Binary to Decimal conversion:

// 101 => 1 x 2² + 0 x 2¹ + 1 x 2⁰ = 4 + 0 + 1 = 5

// 1000 => 1 x 2³ + 0 x 2² + 0 x 2¹ + 0 x 2⁰ = 8 + 0 + 0 + 0 = 8


// Binary operators:

// 1. OR |

// 0 1 => 1
// 1 0 => 1
// 1 1 => 1
// 0 0 => 0

// 2. AND &

// 0 1 => 0
// 1 0 => 0
// 1 1 => 1
// 0 0 => 0

// 3. XOR ^
// Note: XOR of two similar values is 0.

// 0 1 => 1
// 1 0 => 1
// 1 1 => 0
// 0 0 => 0

// XOR Ex:

//       1 0 1
//       1 1 1
// XOR = 0 1 0

// 3 ^ 5 =>  3 =   1 1
//           5 = 1 0 1
//         XOR = 1 1 0 = 6   

// 3 ^ 3 =>  3 =   1 1
//           5 =   1 1
//         XOR =   0 0 = 0   