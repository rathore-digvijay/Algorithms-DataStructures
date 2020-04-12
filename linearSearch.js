/*
 * File: linearSearch.js
 * Project: Algorithms-DataStructures
 * File Created: Sunday, 12th April 2020 1:11:29 pm
 * Author: digvijay (rathore.digvijay10@gmail.com)
 */

/**
 * Steps: 
 * 1 - Start from start and compare one by one element of array
 * 2 - If found return index
 * 3 - If not found then return -1
 * @Complexity O(n) 
 * @param {Array} array Array of numbers
 * @param {Number} num Number to find
 */
function linearSearch(array, num) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element === num) {
            return index;
        }
    }
    return -1;
}

const res1 = linearSearch([5, 8, 9, 6, 8, 4, 55, 2, 5,], 55);
console.log(res1);
const res2 = linearSearch([5, 8, 9, 6, 8, 4, 55, 2, 5,], 25);
console.log(res2);