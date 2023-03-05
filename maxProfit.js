
// You are given an array/list of prices where the elements of the array represent the prices of the stock
// as they were yesterday and indices of the array represent minutes. Your task is to find and return the 
// maximum profit you can make by buying and selling the stock. You can buy and sell the stock only once.
// Note: You can't sell without buying first.

// For Example:
// For the given array [2, 100, 150, 120],
// the maximum profit can be achieved by buying the stock at minute 0 when its price is Rs. 2 and 
// selling at it at Rs. 150. So, the output will be 148. 



function maxProfit(arr) {
    let maxProfit = 0;

    let buyingPrice = arr[0];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < buyingPrice){
            buyingPrice = arr[i];
        }
        else if(maxProfit < arr[i] - buyingPrice) {
            maxProfit = arr[i] - buyingPrice;
        }
    }
    return maxProfit;
}

console.log(maxProfit([12, 7, 3, 2]));