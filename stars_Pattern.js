
function stars_Pattern (n) {
    let stars = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            stars = stars + "*";
        }
        stars = stars + "\n";
    }
    return stars;
}

console.log(stars_Pattern(5));

