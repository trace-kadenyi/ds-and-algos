function numIslands(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let islands = 0;

    // Define DFS (Depth First Search) function to traverse the grid and mark visited cells as water
    const dfs = (r, c) => {
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === '0') {
            return;
        }

        grid[r][c] = '0'; // Mark current cell as visited

        // Recursively visit adjacent cells
        dfs(r - 1, c); // Up
        dfs(r + 1, c); // Down
        dfs(r, c - 1); // Left
        dfs(r, c + 1); // Right
    };

    // Iterate through each cell in the grid
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1') { // If current cell is land
                dfs(i, j); // Visit the island
                islands++; // Increment island count
            }
        }
    }

    return islands;
}

// Example usage:

// Example 1:
const grid1 = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0']
];
console.log(numIslands(grid1)); // Output: 1

// Example 2:
const grid2 = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']
];
console.log(numIslands(grid2)); // Output: 3
