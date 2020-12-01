/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 *   Given the array nums = [2,3,6,6,5], we see that the largest value in the array is 6
 *   and the second largest value is 5. Thus, we return 5 as our answer.
 **/
const nums = [2, 3, 6, 6, 5, 8, 21, 3, 11, 4];
function getSecondLargest(nums) {
  // Complete the function
  let first = 0;
  let second = 0;

  nums.forEach((num) => {
    if (num > first) {
      second = first;
      first = num;
    }
    if (num > second && num < first) second = num;
  });
  console.log(second);
}

function getSecondLargest2(nums) {
  let numsArr = nums.sort((a, b) => b - a);
  console.log(numsArr);

  let i = 0;
  let j = 1;
  while (nums[i] === nums[j]) {
    i++;
    j++;
  }
  console.log(numsArr[j]);
}

getSecondLargest(nums);
getSecondLargest2(nums);
