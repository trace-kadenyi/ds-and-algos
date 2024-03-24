// 887. Super Egg Drop

// You are given k identical eggs and you have access to a building with n floors labeled from 1 to n.

// You know that there exists a floor f where 0 <= f <= n such that any egg dropped at a floor higher than f will break, and any egg dropped at or below floor f will not break.

// Each move, you may take an unbroken egg and drop it from any floor x (where 1 <= x <= n). If the egg breaks, you can no longer use it. However, if the egg does not break, you may reuse it in future moves.

// Return the minimum number of moves that you need to determine with certainty what the value of f is.

 

// Example 1:

// Input: k = 1, n = 2
// Output: 2
// Explanation: 
// Drop the egg from floor 1. If it breaks, we know that f = 0.
// Otherwise, drop the egg from floor 2. If it breaks, we know that f = 1.
// If it does not break, then we know f = 2.
// Hence, we need at minimum 2 moves to determine with certainty what the value of f is.
// Example 2:

// Input: k = 2, n = 6
// Output: 3
// Example 3:

// Input: k = 3, n = 14
// Output: 4
 

// Constraints:

// 1 <= k <= 100
// 1 <= n <= 104

const superEggDrop = (k, n) => {
    const dp = new Array(k + 1).fill(null).map(() => new Array(n + 1).fill(0));
    let m = 0;
    while (dp[k][m] < n) {
        m++;
        for (let i = 1; i <= k; i++) {
        dp[i][m] = dp[i][m - 1] + dp[i - 1][m - 1] + 1;
        }
    }
    return m;
}
// k = 3, n = 14
k = 2
n = 1
console.log(superEggDrop(k, n))