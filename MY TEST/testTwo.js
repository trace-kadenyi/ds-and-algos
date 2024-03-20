// function getMininumNumber(A, B) {
//   const table = [A, B];
//   let min = Infinity;

//   function dfs(r, c, max) {
//     if (r == 2) return;
//     if (c == A.length) return;

//     max = Math.max(max, table[r][c]);
//     if (r === 1 && c === A.length - 1) {
//       min = Math.min(min, max);
//     }

//     dfs(r, c + 1, max);
//     dfs(r + 1, c);
//   }
//   dfs(0, 0, -Infinity);

//   console.log(min);
//   return min;
// }

// A = [-5, -1, -3], B =[-5, 5, -2]
// console.log(getMininumNumber(A, B));




function minOverlappingValue(A, B) {
  const N = A.length;

  let left = Math.min(A[0], B[0]);
  let right = Math.max(A[N - 1], B[N - 1]);
  let result = right;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // Check if there exists an i such that A[i] <= mid and B[i] <= mid
    let found = false;
    for (let i = 0; i < N; i++) {
      if (A[i] <= mid && B[i] <= mid) {
        found = true;
        break;
      }
    }

    // Update the binary search range
    if (found) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  
  return result;
}

// Test cases
console.log(minOverlappingValue([3, 4, 6], [6, 5, 4])); // Output: 5
console.log(minOverlappingValue([1, 2, 1, 1, 1, 4], [1, 1, 1, 3, 1, 1])); // Output: 2
