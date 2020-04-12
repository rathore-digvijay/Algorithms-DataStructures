/*
 * File: binarySearch.js
 * Project: Algorithms-DataStructures
 * File Created: Sunday, 12th April 2020 2:55:40 pm
 * Author: digvijay (rathore.digvijay10@gmail.com)
 */


/**
 * Find middle and compare with number to find
 * If number matches with middle element, we return the mid index.
 * Else If middle element greter than number then find in left half.
 * Else find for the right half.
 * @Complexity - O(Log n)
 * @param {Array} array Array of numbers
 * @param {Number} number Number to find
 * @param {Number} lowIndex Low Index
 * @param {Number} highIndex High Index
 */
function binarySearch(array, number, lowIndex = 0, highIndex = array.length - 1) {
    if (lowIndex < highIndex) {
        const midIndex = Math.floor((lowIndex + highIndex) / 2);
        if (array[midIndex] === number) {
            return midIndex;
        }

        if (array[midIndex] > number) {
            return binarySearch(array, number, lowIndex, midIndex - 1);
        }
        return binarySearch(array, number, midIndex + 1, highIndex);
    }
    return -1;
}


const res1 = binarySearch([5, 8, 9, 16, 18, 44, 55, 122, 125], 55);
console.log(res1);
const res2 = binarySearch([5, 8, 9, 16, 28, 54, 55, 72, 85], 25);
console.log(res2);
