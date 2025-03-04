// Method 1
const hurdleRace = (k, height) => {
  // initialize max
  let max = 0;

  for (let i = 0; i < height.length; i++) {
    if (height[i] > max) {
      max = height[i];
    }
  }

  if (max > k) return max - k;
  return 0;
};

// Method 2
const hurdleRace1 = (k, height) => {
  let max = Math.max(...height);

  if (max > k) return max - k;
  return 0;
};
(k = 4), (height = [1, 6, 3, 5, 2]);
// (k = 7), (height = [2, 4, 4, 5, 2]);

console.log(hurdleRace1(k, height));
