/*
 * File: solution.js
 * Project: algorithms-datastructures
 * File Created: Sunday, 14th June 2020 2:07:36 pm
 * Author: Digvijay (rathore.digvijay10@gmail.com)
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let hashObj = {};
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if(hashObj.hasOwnProperty(element)){
            return true;
        }else{
            hashObj[element] = 1;
        }
    }
    return false;
};

console.log(containsDuplicate([1, 2, 3, 1]))
console.log(containsDuplicate([1, 2, 3, 4]))
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))