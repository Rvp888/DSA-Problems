
// Problem: Create a pyramid of alphabets.

//     A
//    ABC
//   ABCDE
//  ABCDEFG
// ABCDEFGHI


// Solution:

function aplhaPyramid (n) {

    let alphas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let spaces = n-1;
    let pattern = "";

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < spaces; j++) {
            pattern += " ";
        }
        for (let j = 0; j < i*2+1; j++) {
            pattern += alphas[j];
        }
        spaces--;
        pattern += "\n";
    }

    return pattern;

}

console.log(aplhaPyramid(5));

