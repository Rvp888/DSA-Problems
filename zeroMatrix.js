// Problem:
// You are given a matrix 'MATRIX' of dimension 'N' x 'M'. Your task is to make all the elements of row 'i' and column 'j'
// equal to 0, if any element in the 'i'th row or 'j'th column of the matrix is 0. Do this task in place(in same array).

// For Ex:-

// 2 5 4 1            0 5 0 1
// 0 2 1 6    ===>    0 0 0 0
// 1 3 0 8            0 0 0 0
// 6 4 1 3            0 4 0 3

function zeroMatrix(arr) {
  let row = {};
  let column = {};

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == 0) {
        row[i] = true;
        column[j] = true;
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (row[i] || column[j]) {
        arr[i][j] = 0;
      }
    }
  }

  return arr;
}

let arr = [
  [2, 5, 4, 1],
  [0, 2, 0, 6],
  [1, 3, 0, 8],
  [6, 4, 1, 3],
];

console.log(zeroMatrix(arr));
