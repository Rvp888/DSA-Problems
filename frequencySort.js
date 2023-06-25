// Sort Array by Increasing Frequency:

// Given an array of integers nums, sort the array in increasing order based on the frequency 
// of the values. If multiple values have the same frequency, sort them in decreasing order.

// Return the sorted array.

// Example 1:

// Input: nums = [1,1,2,2,2,3]
// Output: [3,1,1,2,2,2]
// Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.

// Example 2:

// Input: nums = [2,3,1,3,2]
// Output: [1,3,3,2,2]
// Explanation: '2' and '3' both have a frequency of 2, so they are sorted in decreasing order.

// Leetcode link: https://leetcode.com/problems/sort-array-by-increasing-frequency/description/

// Solution:

var frequencySort = function(nums) {
    
    let result = [];
    let obj = {};

    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            obj[nums[i]]++;
        }
        else {
            obj[nums[i]] = 1;
        }
    }

    let values = Object.values(obj);
    values.sort((a, b) => a - b);

    let keys = Object.keys(obj);
    keys.sort((a, b) => b - a);

    for (let i = 0; i < values.length; i++) {
        let freq = values[i];
        for (let j = 0; j < keys.length; j++) {
            if (obj[keys[j]] === freq) {
                while (freq > 0) {
                    result.push(keys[j]);
                    freq--;
                }
                keys.splice(j, 1);
                break;
            }
        }
    }

    return result;

};

console.log(frequencySort(nums = [2,3,1,3,2]));

