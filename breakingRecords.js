

// Problem:
// Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. 
// She tabulates the number of times she breaks her season record for most points and least points in a game. 
// Points scored in the first game establish her record for the season, and she begins counting from there.
// Output format [No. of best records, No. of worst records].

// Example:
// Games    0  1   2   3  4  5  6   7  8
// Scores  10  5  20  20  4  5  2  25  1

// Ans: [2, 4]

// Explaination: 
// She broke her best record twice (after games  2 and 7) and her worst record four times (after games 1, 4, 6, and 8), 
// so we print 2 4 as our answer. Note that she did not break her record for best score during game 3, as her score during 
// that game was not strictly greater than her best record at the time.

let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
let scores2 = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];

function breakingRecords(scores) {
    let worst = scores[0];
    let best = scores[0];
    let worstCount = 0;
    let bestCount = 0;

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > best) {
            best = scores[i];
            bestCount++;
        }
        else if (scores[i] < worst) {
            worst = scores[i];
            worstCount++;
        }
    }
    return [bestCount, worstCount];
}


console.log(breakingRecords(scores2));