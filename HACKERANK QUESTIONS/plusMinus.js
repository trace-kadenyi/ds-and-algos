// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

// Example
// arr = [1, ,1 , 0, -1, -1]

// There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

// 0.400000
// 0.400000
// 0.200000

const plusMinus = (arr) => {
  let plus = [];
  let minus = [];
  let zero = [];
  let len = arr.length;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      plus.push(arr[i]);
    } else if (arr[i] < 0) {
      minus.push(arr[i]);
    } else {
      zero.push(arr[i]);
    }
  }
  console.log((plus.length / len).toFixed(6));
  console.log((minus.length / len).toFixed(6));
  console.log((zero.length / len).toFixed(6));
};

arr = [1, 1, 0, -1, -1];
console.log(plusMinus(arr));
