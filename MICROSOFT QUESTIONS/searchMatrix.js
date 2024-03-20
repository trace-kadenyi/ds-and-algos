function searchMatrix(matrix, target) {
    const m = matrix.length; // number of rows
    const n = matrix[0].length; // number of columns

    let row = 0; // start at the first row
    let col = n - 1; // start at the last column

    // Loop through the matrix while row is less than the number of rows and col is greater than or equal to 0
    while (row < m && col >= 0) {
        // If the element at the current position is equal to the target, return true
        if (matrix[row][col] === target) {
            return true;
        } else if (matrix[row][col] < target) { // If the element is less than the target, move to the next row
            row++;
        } else { // If the element is greater than the target, move to the previous column
            col--;
        }
    }

    // If the element is not found after looping through the matrix, return false
    return false;
}

// Test Cases
const matrix1 = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]];
console.log(searchMatrix(matrix1, 3)); // Output: true

const matrix2 = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]];
console.log(searchMatrix(matrix2, 13)); // Output: false

const matrix3 = [[]];
console.log(searchMatrix(matrix3, 1)); // Output: false

const matrix4 = [[1]];
console.log(searchMatrix(matrix4, 1)); // Output: true
