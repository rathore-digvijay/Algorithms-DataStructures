/*
 * File: solution.js
 * Project: algorithms-datastructures
 * File Created: Saturday, 13th June 2020 8:42:43 pm
 * Author: Digvijay Rathore (rathore.digvijay10@gmail.com)
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let resIndex = 0;
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        console.log(index, resIndex, element, nums[resIndex])
        if(element !== nums[resIndex]){
            resIndex++
            nums[resIndex] = element;
        }
    }
    console.log(nums);
    return (resIndex+1);
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));