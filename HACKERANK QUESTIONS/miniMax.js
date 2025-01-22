// Method 1
const miniMax = (arr) => {
  let n = arr.length;
  arr.sort((a, b) => a - b);

  let minimus = arr.slice(0, 4).reduce((a, c) => a + c, 0);
  let maximus = arr.slice(n - 4).reduce((a, c) => a + c, 0);

  console.log(minimus, maximus);
};
// Method 2
const miniMax2 = (arr) => {
  let total = arr.reduce((a, c) => a + c, 0);
  console.log(total - Math.max(...arr), total - Math.min(...arr));
};

arr = [1, 9, 5, 7, 3];
console.log(miniMax(arr));
console.log(miniMax2(arr));
