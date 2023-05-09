
function abcd_Pattern(n) {

    let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let str = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            str = str + alpha[j];
        }
        str += '\n';
    }
    return str;

}

console.log(abcd_Pattern(10));