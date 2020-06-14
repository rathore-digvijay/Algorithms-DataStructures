/*
 * File: solution.js
 * Project: algorithms-datastructures
 * File Created: Sunday, 14th June 2020 2:38:03 pm
 * Author: Digvijay (rathore.digvijay10@gmail.com)
 */

/**
* @param {number[]} nums
* @return {number}
*/
var singleNumber = function (nums) {
    let a = 0;
    for (let i in nums) {
        a ^= nums[i];
        console.log(a)
    }
    return a;
};

console.log(singleNumber([2, 2, 1]))
console.log(singleNumber([4, 1, 2, 1, 2]))