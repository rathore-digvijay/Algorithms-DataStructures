/*
 * File: selectionSort.js
 * Project: algorithms-datastructures
 * File Created: Sunday, 12th April 2020 4:04:22 pm
 * Author: digvijay (rathore.digvijay10@gmail.com)
 */

/**
 * Select the minimum number every time and swap with current position.
 * @Complexity O(n2)
 * @param {Array} array Array of numbers to
 */
function selectionSort(array) {
    let i;
    let j;
    let minIndex;
    for (i = 0; i < array.length - 1; i += 1) {
        minIndex = i;
        for (j = i + 1; j < array.length; j += 1) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        // swap min element with first element
        // swapElem(minIndex, i);
        [array[minIndex], array[i]] = [array[i], array[minIndex]];
    }
    return array;
}


const res1 = selectionSort([5, 60, 8, 9, 1, 0, 3, 45, 33, 54]);
console.log(res1);
