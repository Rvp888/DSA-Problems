// Largest Number:

// Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

// Since the result may be very large, so you need to return a string instead of an integer.

 

// Example 1:
// Input: nums = [10,2]
// Output: "210"

// Example 2:
// Input: nums = [3,30,34,5,9]
// Output: "9534330"


// Solution:

let largestNumber = function (nums) {

    let sortedNums = nums.sort((a, b) => {
        let ab = a.toString() + b.toString();
        let ba = b.toString() + a.toString();

        return ba - ab;
    })

    let resultString = sortedNums.join("");

    if (Number(resultString) === 0) return "0";

    return resultString;

}

console.log(largestNumber([3,30,34,5,9]));

