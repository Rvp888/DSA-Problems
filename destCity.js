// Destination City:

// You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct 
// path going from cityAi to cityBi. Return the destination city, that is, the city without any 
// path outgoing to another city.

// It is guaranteed that the graph of paths forms a line without any loop, therefore, there will 
// be exactly one destination city.

// Example 1:

// Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
// Output: "Sao Paulo" 
// Explanation: Starting at "London" city you will reach "Sao Paulo" city which is 
// the destination city. Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".

// Example 2:

// Input: paths = [["B","C"],["D","B"],["C","A"]]
// Output: "A"
// Explanation: All possible trips are: 
// "D" -> "B" -> "C" -> "A". 
// "B" -> "C" -> "A". 
// "C" -> "A". 
// "A". 
// Clearly the destination city is "A".

// Leetcode link: https://leetcode.com/problems/destination-city/description/

// Solution:

var destCity = function(paths) {
    
    let temp = [];

    for (let i = 0; i < paths.length; i++) {
        temp.push(...paths[i]);
    }

    for (let i = 1; i < temp.length; i += 2) {
        let isDestination = true;
        for (let j = 0; j < temp.length; j++) {
            if (temp[i] === temp[j] && j % 2 === 0) {
                isDestination = false;
            }
        }
        if (isDestination) {
            return temp[i];
        }
    }

};

console.log(destCity(paths = [["B","C"],["D","B"],["C","A"]]));
