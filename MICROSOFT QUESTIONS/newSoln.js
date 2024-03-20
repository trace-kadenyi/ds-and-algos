const setZeroes = (matrix) => {
    let rowsWithZeroes = new Array(matrix.length).fill(false);
    let colsWithZeroes = new Array(matrix[0].length).fill(false);

    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] === 0) {
                rowsWithZeroes[i] = true;
                colsWithZeroes[j] = true;
            }
        }
    }

    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(rowsWithZeroes[i] || colsWithZeroes[j]) {
                matrix[i][j] = 0;
            }
        }}
        return matrix;
} 

console.log(setZeroes([[1,1,1],
                        [1,0,1],
                        [1,1,1]])); // [[1,0,1],[0,0,0],[1,0,1]]