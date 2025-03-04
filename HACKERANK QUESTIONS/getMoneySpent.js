const getMoneySpent = (keyboards, drives, b) => {
  let max = -1;
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      let sum = keyboards[i] + drives[j];
      if (sum > max && sum <= b) {
        max = sum;
      }
    }
  }
  return max;
};
(keyboards = [40, 50, 60]), (drives = [5, 8, 12]), (b = 60);
// (keyboards = [3, 1]), (drives = [5, 2, 8]), (b = 10);
console.log(getMoneySpent(keyboards, drives, b));
