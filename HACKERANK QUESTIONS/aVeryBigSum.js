const aVeryBigSum = (ar) => {
  let count = 0;

  for (let i = 0; i < ar.length; i++) {
    count += ar[i];
  }
  return count;
};
ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
console.log(aVeryBigSum(ar));
