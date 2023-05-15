
// Problem: Create a vacant diamond pattern as shown below;

// ***** *****
// ****   ****
// ***     ***
// **       **
// *         *
// **       **
// ***     ***
// ****   ****
// ***** *****

// Solution:

function vacantDiamondPattern (n) {

    let pattern = "";
    let stars = (n+1)/2;
    let spaces = 1;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < stars; j++) {
            pattern += "*";
        }
        for (let j = 0; j < spaces; j++) {
            pattern += " ";
        }
        for (let j = 0; j < stars; j++) {
            pattern += "*";
        }

        if (i >= (n-1)/2) {
            stars++;
            spaces -= 2;
        }
        else {
            stars--;
            spaces += 2;
        }
        pattern += "\n";
    }

    return pattern;

}

console.log(vacantDiamondPattern(9));


