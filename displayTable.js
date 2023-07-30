// Display table of food orders in a Restaurant:

// Given the array orders, which represents the orders that customers have done in a restaurant. 
// More specifically orders[i]=[customerNamei,tableNumberi,foodItemi] where 'customerNamei' is 
// the name of the customer, 'tableNumberi' is the table customer sit at, and 'foodItemi' is the 
// item customer orders.

// Return the restaurant's “display table”. The “display table” is a table whose row entries denote 
// how many of each food item each table ordered. The first column is the table number and the remaining 
// columns correspond to each food item in alphabetical order. The first row should be a header whose 
// first column is “Table”, followed by the names of the food items. Note that the customer names are 
// not part of the table. Additionally, the rows should be sorted in numerically increasing order.

// Example 1:

// Input: orders = [["David","3","Ceviche"],["Corina","10","Beef Burrito"],["David","3","Fried Chicken"],["Carla","5","Water"],["Carla","5","Ceviche"],["Rous","3","Ceviche"]]
// Output: [["Table","Beef Burrito","Ceviche","Fried Chicken","Water"],["3","0","2","1","0"],["5","0","1","0","1"],["10","1","0","0","0"]] 
// Explanation:
// The displaying table looks like:
// Table,Beef Burrito,Ceviche,Fried Chicken,Water
// 3    ,0           ,2      ,1            ,0
// 5    ,0           ,1      ,0            ,1
// 10   ,1           ,0      ,0            ,0
// For the table 3: David orders "Ceviche" and "Fried Chicken", and Rous orders "Ceviche".
// For the table 5: Carla orders "Water" and "Ceviche".
// For the table 10: Corina orders "Beef Burrito".

// Leetcode link: https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant/

// Solution:

var displayTable = function(orders) {
    
    let tables = {};
    let foods = [];
    let tabNums = [];
    let result = [];

    for (let i = 0; i < orders.length; i++) {
        let order = orders[i];
        if (!foods.includes(order[2])) {
            foods.push(order[2]);
        }
        if (!tabNums.includes(order[1])) {
            tabNums.push(order[1]);
        }
        if (tables[order[1]]) {
            if (tables[order[1]][order[2]]) {
                tables[order[1]][order[2]]++;
            }
            else {
                tables[order[1]][order[2]] = 1;
            }    
        }
        else {
            tables[order[1]] = {[order[2]]: 1};
        }
    }

    foods.sort().unshift("Table");

    result.push(foods);

    tabNums.sort((a,b) => a-b);

    for (let i = 0; i < tabNums.length; i++) {
        let row = [tabNums[i]];
        for (let j = 1; j < foods.length; j++) {
            let col = tables[tabNums[i]][foods[j]]?.toString() || "0";
            row.push(col);
        }
        result.push(row);
    }

    return result;

};

// TC => O(n^2)
// SC => O(n)

console.log(displayTable([["David","3","Ceviche"],["Corina","10","Beef Burrito"],["David","3","Fried Chicken"],
["Carla","5","Water"],["Carla","5","Ceviche"],["Rous","3","Ceviche"]]));


