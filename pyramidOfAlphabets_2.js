
// Problem: Create a pyramid of alphabets as like below pattern.

//       A
//      ABA
//     ABCBA
//    ABCDCBA
//   ABCDEDCBA

// Solution:

function alphasPyramid (n) {

    let alphas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let pattern = "";
    let spaces = n-1;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < spaces; j++) {
            pattern += " ";
        }
        for (let j = 0; j < i+1; j++) {
            pattern += alphas[j];
        }
        for (let j = i-1; j >= 0; j--) {
            pattern += alphas[j];
        }
        spaces--;
        pattern += "\n";
    }

    return pattern;

}

console.log(alphasPyramid(5));

