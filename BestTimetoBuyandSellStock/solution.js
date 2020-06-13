/*
 * File: solution.js
 * Project: algorithms-datastructures
 * File Created: Saturday, 13th June 2020 9:15:38 pm
 * Author: Digvijay Rathore (rathore.digvijay10@gmail.com)
 */


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxprofit = 0;
    for (let i = 1; i < prices.length; i++) {
        console.log(prices[i], prices[i - 1], prices[i] - prices[i - 1])
        if (prices[i] > prices[i - 1]){
            maxprofit += prices[i] - prices[i - 1];
        }
        console.log(maxprofit);
    }
    return maxprofit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 14, 50, 0]))
console.log(maxProfit([1, 2, 3, 4, 5]))
console.log(maxProfit([7, 6, 4, 3, 1]))