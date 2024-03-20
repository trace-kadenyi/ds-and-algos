// ### **3. Set columns and rows as zeroes**

// **Problem Statement**: Given a two-dimensional array, if any element within is zero, make its whole row and column zero. Consider the matrix below.

const setZeroes = (matrix) => {
  // Create arrays to track which rows and columns have zeros
  const rowsWithZero = new Array(matrix.length).fill(false);
  const colsWithZero = new Array(matrix[0].length).fill(false);

  // Loop through the matrix to mark which rows and columns contain zeros
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        rowsWithZero[i] = true;
        colsWithZero[j] = true;
      }
    }
  }

  // Loop through the matrix again to set zeros for rows and columns that have zeros
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (rowsWithZero[i] || colsWithZero[j]) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
};

const matrix = [
  [5, 4, 3, 9],
  [2, 0, 7, 6],
  [1, 3, 4, 0],
  [9, 8, 3, 4],
];

console.log(setZeroes(matrix));
