/*
 * File: solutions.js
 * Project: algorithms-datastructures
 * File Created: Sunday, 14th June 2020 5:44:54 pm
 * Author: Digvijay Rathore (rathore.digvijay10@gmail.com)
 */

/**
* @param {number[]} digits
* @return {number[]}
*/
var plusOne = function (digits) {
    return iterate(digits, digits.length - 1)
};

var iterate = function (digits, place) {
    console.log("called ", digits, place)
    let endDigit = digits[place];
    if (endDigit == 9) {
        // digits[place] = 0;
        digits.push(0);
        digits[place] = 1
        return iterate(digits, place-1)
    } else {
        digits[place] += 1;
        return digits;
    }
}

// console.log(plusOne([1, 2, 3]))
// console.log(plusOne([4, 3, 2, 1]))
console.log(plusOne([9, 9]))