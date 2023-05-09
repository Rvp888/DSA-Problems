
function right_stars_pattern(n) {
    let starPattern = "";
    let space = n-1;
    let stars = 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < space; j++) {
            starPattern += " ";
        }

        for (let k = 0; k < stars; k++) {
            starPattern += "*";
        }
        stars++;
        space--;
        starPattern += "\n";
    }
    return starPattern;
}

console.log(right_stars_pattern(8));



