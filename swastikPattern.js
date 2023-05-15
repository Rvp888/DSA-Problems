
// Problem: Create a Swastik pattern as shown below.

//   *   *****
//   *   *
//   *   *
//   *********
//       *   *
//       *   *
//   *****   *

// Solution:


function swastikPattern (rows) {

    let pattern = "";
    let cols = rows+2

    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            if ((i == 1 && (j == 1 || j > (rows+1)/2)) || (i > 1 && i < (rows+1)/2 && (j == 1 || j == (cols+1)/2)) || (i == (rows+1)/2)) {
                pattern += "*";
            }
            else if ((i > (rows+1)/2 && i < rows && (j == (cols+1)/2 || j == cols)) || (i == rows && (j <= (cols+1)/2 || j == cols))) {
                pattern += "*";
            }
            else {
                pattern += " ";
            }
        }
        pattern += "\n";
    }

    return pattern;

}

console.log(swastikPattern(5));



