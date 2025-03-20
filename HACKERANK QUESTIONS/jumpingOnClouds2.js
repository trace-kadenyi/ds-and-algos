const jumpingOnClouds = (c) => {
  let count = 0;

  for (let i = 0; i < c.length - 1; ) {
    if (i + 2 < c.length && c[i + 2] === 0) {
      i += 2;
    } else {
      i += 1;
    }
    count++;
  }
  return count;
};
// arr = [0, 1, 0, 0, 0, 1, 0];
// arr = [0, 0, 1, 0, 0, 0]
arr = [0, 0, 0, 0, 1, 0];
console.log(jumpingOnClouds(arr));
