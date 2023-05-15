
// Problem: Create a vacant square pattern as shown below.

// *****
// *   *
// *   *
// *   *
// *****

// Solution:

function vacantSquare (n) {

    let pattern = "";
    let spaces = n-2;

    for (let i = 1; i <= n; i++)  {
        for (let j = 1; j <= n; j++) {
            if (i === 1 || i === n || j === 1 || j === n) {
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

console.log(vacantSquare(5));

