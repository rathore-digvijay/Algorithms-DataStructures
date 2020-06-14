/*
 * File: solutions.js
 * Project: algorithms-datastructures
 * File Created: Sunday, 14th June 2020 2:57:46 pm
 * Author: Digvijay (rathore.digvijay10@gmail.com)
 */

/**
 * This method is when we only have to return element one times.
* @param {number[]} nums1
* @param {number[]} nums2
* @return {number[]}
*/
var intersectOne = function (nums1, nums2) {
    let intersectionArray = [];
    for (let i = 0; i < nums1.length; i++) {
        const elem1 = nums1[i];
        for (let j = 0; j < nums2.length; j++) {
            const elem2 = nums2[j];
            if (elem1 === elem2 && (intersectionArray.indexOf(elem1) < 0)) {
                intersectionArray.push(elem1);
            }
        }
    }
    return intersectionArray;
};

// console.log(intersectOne([1, 2, 2, 1], [2, 2]))
// console.log(intersectOne([4, 9, 5], [9, 4, 9, 8, 4]))

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let hashObj = {}, intersectArray = [];
    for (let i = 0; i < nums1.length; i++) {
        const elem1 = nums1[i];
        hashObj[elem1] = !(elem1 in hashObj) ? 1 : hashObj[elem1] + 1;
    }
    for (let j = 0; j < nums2.length; j++) {
        const elem2 = nums2[j];
        if ((elem2 in hashObj) && (hashObj[elem2] > 0)) {
            intersectArray.push(elem2);
            hashObj[elem2] = hashObj[elem2] - 1;
        }
    }
    return intersectArray;
};


console.log(intersect([1, 2, 2, 1], [2, 2]))
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]))