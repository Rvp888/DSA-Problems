
// Problem: Create a cleavage pattern of stars.


// Solution:

function cleavagePattern (n) {

    let stars = 1;
    let spaces = (n*2)-2;
    let pattern = "";

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

        stars++;
        spaces -= 2;
        pattern += "\n";

    }

    return pattern;

}

console.log(cleavagePattern(5));