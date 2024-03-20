// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example
// arr = [1, 3, 5, 7, 9]

// The minimum sum is 1 + 3+ 5 + 7 = 16  and the maximum sum is 3 + 5 + 7 + 9 = 24. The function prints 16 24

const miniMax = (arr) => {
  arr.sort((a, b) => a - b);
  let maxArr = arr.slice(arr.length - 4);
  let minArr = arr.slice(0, 4);

  return [minArr.reduce((a, b) => a + b), maxArr.reduce((a, b) => a + b)];
};

arr = [1, 3, 5, 7, 9];
console.log(miniMax(arr));
