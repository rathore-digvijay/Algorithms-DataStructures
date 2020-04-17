/*
 * File: index.js
 * Project: algorithms-datastructures
 * File Created: Friday, 17th April 2020 11:20:55 am
 * Author: digvijay (rathore.digvijay10@gmail.com)
 */


/**
* This method rotate the elements in the clockwise direction and return the output array.
* I have implemented two methods over here. One is using inbuilt function and other
* is without using inbuilt function.
* @param {Array} array array of numbers
* @param {Number} elemRotate number of element to rotate
* @returns array after rotation of array
*/
function rotateArray(array, elemRotate) {
    // when rotation point is greter than array length
    if (elemRotate >= array.length) {
        console.log("Element rotate can't be greter than Array length");
        return array;
    }

    /**
     * With using inbuilt function shift
     */
    // for (let i = 0; i < array.length; i+=1) {
    //     if (i === elemRotate)
    //         return array;
    //     let elem = array.shift();
    //     array.push(elem);
    // }

    /**
     * Without using inbuilt function
     */
    const result = [];
    // iterate from no of element rotate to array length and push in array
    for (let i = elemRotate; i < array.length; i += 1) {
        result.push(array[i]);
    }
    // iterate from firstIndex to elements going to rotate and push in array
    for (let i = 0; i < elemRotate; i += 1) {
        result.push(array[i]);
    }
    return result;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));
// Expected Output:  3 4 5 1 2
console.log(rotateArray([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 3));
// Expected Output:  8, 10, 12, 14, 16, 18, 20, 2, 4, 6
