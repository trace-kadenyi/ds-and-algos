// Given an array of integers, where all elements but one occur twice, find the unique element.

// Example
// a = [1, 2, 3, 4, 3, 2, 1]

// The unique element is 4.

// Function Description

// Complete the lonelyinteger function in the editor below.

// lonelyinteger has the following parameter(s):

// int a[n]: an array of integers
// Returns

// int: the element that occurs only once
// Input Format

// The first line contains a single integer,n , the number of integers in the array.
// The second line contains  space-separated integers that describe the values in a.

const lonelyInt = (arr) => {
  let hash = {};

  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]]) {
      hash[arr[i]]++;
    } else {
      hash[arr[i]] = 1;
    }
  }

  for (let key in hash) {
    if (hash[key] === 1) {
      return key;
    }
  }
};

a = [1, 2, 3, 4, 3, 2, 1];
console.log(lonelyInt(a));
