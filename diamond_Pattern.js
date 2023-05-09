
function diamond_Pattern (n) {

    let pattern = "";
    let stars = 1;
    let spaces = (n-1)/2;

    for (let i = 0; i < n; i++)  {
        for (let j = 0; j < spaces; j++) {
            pattern += " ";
        }
        for (let j = 0; j < stars; j++) {
            pattern += "*";
        }
        if (i < n/2 -1) {
            stars += 2;
            spaces--;
        } else {
            stars -= 2;
            spaces++;
        }
        
        pattern += "\n";
    }

    return pattern;

}

console.log(diamond_Pattern(7));