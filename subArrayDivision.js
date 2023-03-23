

// Problem:
// Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

// Lily decides to share a contiguous segment of the bar selected such that:

// The length of the segment matches Ron's birth month, and,
// The sum of the integers on the squares is equal to his birth day.
// Determine how many ways she can divide the chocolate.

// Example
// arr = [2, 2, 1, 3, 2]
// d = 4
// m = 2


// Lily wants to find segments summing to Ron's birth day, d = 4 with a length equalling his birth month, m = 2 . 
// In this case, there are two segments meeting her criteria: [2, 2] and [1, 3].



function subArrayDivision(arr, d, m) {
    let ans = 0;
    if(arr.length === 1 && arr[0] === d){
        ans++;
    }

    for(let i = 0; i < arr.length - m; i++){
        let sum = 0;
        for(let j = i; j < i + m; j++){
            sum += arr[j];
        }
        if(sum === d){
            ans++;
        }
    }

    return ans;
}

console.log(subArrayDivision([4], 4, 1));