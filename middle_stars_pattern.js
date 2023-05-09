
function middle_stars_pattern (n) {

    let stars_Pattern = "";
    let spaces = n-1;
    let stars = 1;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < spaces; j++) {
            stars_Pattern += " ";
        }

        for (let k = 0; k < stars; k++) {
            stars_Pattern += "*";
        }
        stars += 2;
        spaces--;
        stars_Pattern += "\n";
    }

    return stars_Pattern;

}

console.log(middle_stars_pattern(5));
