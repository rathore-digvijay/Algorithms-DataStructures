/*
 * File: index.js
 * Project: algorithms-datastructures
 * File Created: Friday, 17th April 2020 11:18:42 am
 * Author: digvijay (rathore.digvijay10@gmail.com)
 */


/**
* This method finds the minimum element in sorted array rotated at some unknown point.
* @param {Array} array array of Numbers
* @param {Number} startIndex starting index of array, or for the processing the starting
                     index while recursion
* @param {Number} lastIndex last Index of the array or pastIndex of processing array
* @return {Number} the minimum element
*/
function findMinElement(array, startIndex = 0, lastIndex = (array.length - 1)) {
    // when array is not rotated or we have only one element in array remaining
    if (startIndex >= lastIndex) {
        return array[startIndex];
    }
    // find middle Index of array
    const midIndex = (startIndex + lastIndex) / 2;
    // if mid element is greater than mid+1 element
    if (midIndex < lastIndex && array[midIndex] > array[midIndex + 1]) {
        return array[midIndex + 1];
    }
    // if midElement is smaller than mid-1 element
    if (midIndex > startIndex && array[midIndex] < array[midIndex - 1]) {
        return array[midIndex];
    }
    // if lastelement greter then middle element then
    // minimum element lies in first half otherwise second half
    return (array[lastIndex] > array[midIndex]) ? findMinElement(array, startIndex, midIndex - 1) : findMinElement(array, midIndex + 1, lastIndex);
}

console.log(findMinElement([4, 5, 1, 2, 3]));
// Expected Output:  1
console.log(findMinElement([1, 2, 3]));
// Expected Output:  1
console.log(findMinElement([10, 20, 30, 40, 50, 5, 7]));
// Expected Output:  5
console.log(findMinElement([100, 2, 30, 40, 50, 55, 77]));
// Expected Output:  2
