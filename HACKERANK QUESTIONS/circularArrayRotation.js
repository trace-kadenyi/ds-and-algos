// Method 1
const circularArrayRotation = (a, k, queries) => {
  let results = [];
  for (let i = 0; i < k; i++) {
    a.unshift(a.pop());
  }

  for (let i = 0; i < queries.length; i++) {
    results.push(a[queries[i]]);
  }
  return results;
};

// Method 2
const circularArrayRotation2 = (a, k, queries) => {
  for (let i = 0; i < k; i++) {
    a.unshift(a.pop());
  }

  return queries.map((index) => a[index]); // Return results instead of logging
};

// Method 3
const circularArrayRotation3 = (a, k, queries) => {
  let n = a.length;
  k = k % n; // Optimize rotations (avoid redundant full cycles)
  let rotatedArray = [...a.slice(-k), ...a.slice(0, n - k)]; // Efficient rotation

  return queries.map((index) => rotatedArray[index]); // Return the result
};

let a = [3, 4, 5];
let k = 2;
let queries = [1, 2];

// console.log(circularArrayRotation(a, k, queries));
// console.log(circularArrayRotation2(a, k, queries));
console.log(circularArrayRotation3(a, k, queries)); // Output: [5, 3]
