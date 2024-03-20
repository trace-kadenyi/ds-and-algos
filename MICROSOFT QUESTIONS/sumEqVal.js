// ### **2. Determine if the sum of two integers is equal to a given value**

// **Problem Statement**: Given an array of integers and a value, determine if there are any two integers in the array whose sum is equal to the given value. Return true if the sum exists, and false if it does not. Consider the following array and its target sums:

// Target Sum107+3=10, 2+8=10

// Target Sum19No two values sum up to 19

const sumEqVal = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === val) {
        // return [arr[i], arr[j]];
        return true;
      }
    }
  }
  return false;
};

arr = [5, 6, 7, 8, 9, 10, 3];
val = 10;
console.log(sumEqVal(arr, val));
