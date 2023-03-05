// Next Permutation

// Problem: 
// You have been given a permutation of 'N' integers. 
// A sequence of 'N' integers is called a permutation if it contains all integers from 1 to 'N' exactly once.
// Your task is to rearrange the numbers and generate the lexicographically next greater permutation.
// For example, [2,1,3,4] is lexicographically smaller than [2,1,4,3].

// Steps to solve the problem:
// 1) Find out the first smallest integer anailable from right hand side.
// 2) Replace it with its next greater integer from its right side (swap them).
// 3) Sort or Reverse the rest of the array of right side.

function nextPermutation(arr) {
    let n = arr.length;
    let i;
    for(i = n-2; i >= 0; i--){
        if(arr[i] < arr[i+1]){
            break;
        }
    }
    if(i < 0){
        return("Next permutation not exist"); 
    }
    
    let j;
    for(j = n-1; j > i; j--){
        if(arr[j] > arr[i]){
            break;
        }
    }

    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    let arr1 = arr.slice(i+1, n);
    arr1.reverse();

    arr.splice(i+1,arr1.length,...arr1);

    return arr;
}

console.log(nextPermutation([5,4,1,3,2]));