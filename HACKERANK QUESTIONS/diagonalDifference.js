const diagonalDifference = (arr) => {
  let leftSum = 0,
    rightSum = 0,
    n = arr.length;

  for (let i = 0; i < n; i++) {
    leftSum += arr[i][i];
    rightSum += arr[i][n - 1 - i];
  }
  return Math.abs(leftSum - rightSum);
};

const matrix = [
  [1, 2, 3], // n = 3, i = 0 left = 1, right = 3
  [4, 5, 6], // n = 3, i = 1 left = 5, right = 5
  [9, 8, 9], // n = 3, i = 2 left = 9, right = 9
  //               left = 15, right = 17
];

const matrix2 = [
  [11, 2, 4], // n = 3, i = 0; left = 11, right = 4
  [4, 5, 6], // n = 3, i = 1; left = 5, right = 5
  [10, 8, -12], // n = 3, i = 2; left = -12, right = 10
  //              left = 4; right = 19
];
console.log(diagonalDifference(matrix));
console.log(diagonalDifference(matrix2));
