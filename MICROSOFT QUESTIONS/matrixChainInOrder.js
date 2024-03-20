function matrixChainOrder(p) {
    const n = p.length; // number of matrices

    // Create a 2D array to store the minimum number of scalar multiplications needed
    const m = Array.from({ length: n }, () => Array(n).fill(0));

    // Fill in the base cases (when the length of the chain is 1)
    for (let i = 1; i < n; i++) {
        m[i][i] = 0;
    }

    // Iterate through the matrix chain lengths
    for (let chainLen = 2; chainLen < n; chainLen++) {
        // Iterate through the start index of the matrix chain
        for (let i = 1; i < n - chainLen + 1; i++) {
            const j = i + chainLen - 1; // end index of the matrix chain

            m[i][j] = Infinity; // initialize to infinity

            // Iterate through the possible ways to split the chain
            for (let k = i; k < j; k++) {
                const cost = m[i][k] + m[k + 1][j] + p[i - 1] * p[k] * p[j];

                if (cost < m[i][j]) {
                    m[i][j] = cost; // update the minimum cost
                }
            }
        }
    }

    return m[1][n - 1]; // return the minimum number of scalar multiplications for the entire chain
}

// Test Cases
const dimensions1 = [40, 20, 30, 10, 30];
console.log(matrixChainOrder(dimensions1)); // Output: 26000

const dimensions2 = [10, 20, 30, 40, 30];
console.log(matrixChainOrder(dimensions2)); // Output: 30000
