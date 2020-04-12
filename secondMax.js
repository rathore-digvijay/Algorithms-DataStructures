/*
 * File: secondMax.js
 * Project: algorithms-datastructures
 * File Created: Sunday, 12th April 2020 3:48:13 pm
 * Author: digvijay (rathore.digvijay10@gmail.com)
 */
// Find second maximum value from the array

// max = second max = array[0]
// Traverse the array if current element > max, update max and second max
// if element in between max and second max, update second max
// return second max

const array = [10, 25, 1, 60, 45, 100, 251, 201, 41, 9, 12, 45, 78, 201, 251, 2032];

function secondMax(arr) {
    let max1 = arr[0]; let
        max2 = arr[0];
    arr.forEach((element) => {
        if (element > max1) {
            max2 = max1;
            max1 = element;
        } else if ((element < max1) && (element > max2)) {
            max2 = element;
        }
    });
    return max2;
}

console.log(secondMax(array));

// we can also change this for testing
