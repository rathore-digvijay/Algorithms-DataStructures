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
* @param {Array} nums array of numbers
* @param {Number} elemRotate number of element to rotate
* @returns array after rotation of array
*/
function rotateArray(nums, elemRotate) {
    // when rotation point is greter than array length
    if (elemRotate >= nums.length) {
        console.log("Element rotate can't be greter than Array length");
        return nums;
    }

    elemRotate %= nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, elemRotate - 1);
    reverse(nums, elemRotate, nums.length - 1);
    return nums;
}

function reverse(nums, start, end) {
    while (start < end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}
console.log(rotateArray([1, 2, 3, 4, 5], 2));
// Expected Output:  3 4 5 1 2
console.log(rotateArray([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 3));
// Expected Output:  8, 10, 12, 14, 16, 18, 20, 2, 4, 6
