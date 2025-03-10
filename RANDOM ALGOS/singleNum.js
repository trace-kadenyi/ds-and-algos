// Method 1
const singleNum = (arr) => {
  return arr.reduce((a, c) => a ^ c, 0);
};

// Method 2
const singleNum1 = (arr) => {
  let hash = {};

  for (const num of arr) {
    hash[num] = (hash[num] || 0) + 1;
  }

  for (const num in hash) {
    if (hash[num] === 1) return num;
  }
};

console.log(singleNum1([2, 2, 1])); // Output: 1
console.log(singleNum1([4, 1, 2, 1, 2])); // Output: 4
console.log(singleNum1([7, 3, 5, 5, 3])); // Output: 7
