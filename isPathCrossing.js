// Path Crossing:

// Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving 
// one unit north, south, east, or west, respectively. You start at the origin (0, 0) 
// on a 2D plane and walk on the path specified by path.

// Return true if the path crosses itself at any point, that is, if at any time you are 
// on a location you have previously visited. Return false otherwise.

// Example 1:

// Input: path = "NES"
// Output: false 
// Explanation: Notice that the path doesn't cross any point more than once.

// Example 2:

// Input: path = "NESWW"
// Output: true
// Explanation: Notice that the path visits the origin twice.

// Leetcode link: https://leetcode.com/problems/path-crossing/description/

// Solution:

var isPathCrossing = function(path) {
    
    let arr = [];
    let obj = {x: 0, y: 0};
    let str = JSON.stringify(obj);
    arr.push(str);

    for (let i = 0; i < path.length; i++) {
        let char = path[i];
        
        if (char == 'N') obj['y']++;
        else if (char == 'S') obj['y']--;
        else if (char == 'E') obj['x']++;
        else if (char == 'W') obj['x']--;

        str = JSON.stringify(obj);
        if (arr.includes(str)) {
            return true;
        }
        arr.push(str);
    }

    return false;

};

// TC => O(n^2)
// SC => O(n)

console.log(isPathCrossing(path = "NESWW"));

