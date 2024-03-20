// **Problem Statement**: Given an array of positive numbers ranging from 1 to `n`, such that all numbers from 1 to `n` are present except one number `x`, find `x`. Assume the input array is unsorted.

// n = 8; x = 6

// loop through the array
// find the expected sum if the array was complete
// find the actual sum
// return the subtraction result

const missingNum = (arr) => {
  let n = arr.length + 1;

  for (let i = 0; i < arr.length; i++) {
    let expectedSum = (n * (n + 1)) / 2;
    let currentSum = arr.reduce((a, c) => a + c);
    return expectedSum - currentSum;
  }
};

arr = [1, 2, 3, 5, 6, 7, 8];
console.log(missingNum(arr));
