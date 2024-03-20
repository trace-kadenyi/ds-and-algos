// **Problem Statement**: Given an array of positive numbers ranging from 1 to `n`, such that all numbers from 1 to `n` are present except one number `x`, find `x`. Assume the input array is unsorted.

// n = 8; x = 6

const findMissingNum = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    // find sum of all numbers in the array
    let sum = arr.reduce((acc, curr) => acc + curr);
    // since the numbers are from 1 to n, find sum of first n numbers
    let n = arr.length + 1;
    let expectedSum = (n * (n + 1)) / 2;
    return expectedSum - sum;
  }
};

arr = [1, 2, 3, 4, 5, 7, 8];
console.log(findMissingNum(arr));
