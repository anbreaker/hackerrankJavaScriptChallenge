'use strict';

/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 *
 * Parameter(s):
 * nums: An array of numbers.
 */

let nums = [1, 2, 3, 4, 5];
function modifyArray(nums) {
  return nums.map((item) => {
    if (item % 2 === 0) return item * 2;
    else return item * 3;
  });
}
console.log(modifyArray(nums));
