const divisibleSumPairs = (n, k, ar) => {
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((ar[i] + ar[j]) % k === 0) count++;
    }
  }
  return count;
};

// (ar = [1, 2, 3, 4, 5, 6]), (k = 5), (n = 6);
(ar = [1, 3, 2, 6, 1, 2]), (k = 3), (n = 6);
console.log(divisibleSumPairs(n, k, ar));
