

// Problem:

// An English text needs to be encrypted using the following encryption scheme.
// First, the spaces are removed from the text. Let  be the length of this text.
// Then, characters are written into a grid, whose rows and columns have the following constraints:

// Example:
// s = "if man was meant to stay on the ground god would have given us roots"

// After removing spaces, the string is 54 characters long. √54 is between 7 and 8, so it is written in the 
// form of a grid with 7 rows and 8 columns.

// * Ensure that rows x columns >= L
// * If multiple grids satisfy the above conditions, choose the one with the minimum area, i.e. rows x columns.

// Written in 7 rows and 8 columns:

// ifmanwas
// meanttos
// tayonthe
// groundgo
// dwouldha
// vegivenu
// sroots

// The encoded message(ans) is obtained by displaying the characters of each column, with a space between column texts. 
// The encoded message(ans) for the grid above is:

// Ans = "imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau"


let str = "if man was meant to stay on the ground god would have given us roots";

function encryption(str) {
    str = str.split(" ");
    str = str.join("");
    let lgt = str.length;
    let rows = Math.floor(Math.sqrt(lgt));
    let columns = Math.ceil(Math.sqrt(lgt));
    let ans = "";

    for(let i = 0; i < columns; i++){
        for(let j = i; j < lgt; j += columns){
            ans += str[j];
        }
        ans += " ";
    }
    return ans;
}

console.log(encryption(str));