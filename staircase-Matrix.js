
// Problem:
// Print a staircase of n steps.

// Example:
// For n = 4
//         #
//        ##
//       ###
//      ####


function staircaseMatrix(n) {
    let hashes = 1;
    let spaces = n-1;
    let staircase = "";

    for(let i = 0; i < n; i++){
        for(let j = 0; j < spaces; j++){
            staircase += " ";
        }
        for(let k = 0; k < hashes; k++){
            staircase += "#";
        }
        spaces--;
        hashes++;
        staircase += '\n';
    }
    return staircase;
}

console.log(staircaseMatrix(4));