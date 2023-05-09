
// Problem: Given an array of objects, return an array of objects containing 
// the name of the students and the good note that he has.

// A good note is a note which is higher in value than the rest of the notes.

// Example:

// Input:
// [
//     { name: "John", notes: [10, 12, 15] },
//     { name: "Jane", notes: [20, 5, 11] },
//     { name: "Johny", notes: [10, 16, 8] }
// ]

// Output:
// [
    // { name: "John", goodNote: 15 },
    // { name: "Jane", goodNote: 20 },
    // { name: "Johny", goodNote: 16 }
// ]

// Solution:

function goodNote (arr) {

    for (let i = 0; i < arr.length; i++) {
        arr[i]["goodNote"] = Math.max(...arr[i]["notes"]);
        delete arr[i]["notes"];
    }

    return arr;

}

console.log(goodNote([
    { name: "John", notes: [10, 12, 15] },
    { name: "Jane", notes: [20, 5, 11] },
    { name: "Johny", notes: [10, 16, 8] }
]));
