// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

// const solution = (A) => {
//   A.sort((a, b) => a - b);

//   // create set
//   let newA = new Set(A);
//   // turn into array
//   newA = Array.from(newA);

//   // if all numbers are negative, return 1
//   if (newA[newA.length - 1] < 0) {
//     return 1;
//   }

//   for (let i = 0; i < newA.length; i++) {
//     if (newA[i] > 0 && newA[i] !== i + 1) {
//       return i + 1;
//     }
//   }
//   return newA.length + 1;
// };

function solution(A) {
    // Remove duplicates and negative numbers
    const distinct = Array.from(new Set(A.filter(num => num > 0)));

    // If no positive numbers, return 1
    if (distinct.length === 0) return 1;

    // Sort the distinct numbers
    distinct.sort((a, b) => a - b);

    // Check for the smallest positive integer not present
    for (let i = 0; i < distinct.length; i++) {
        if (distinct[i] !== i + 1) return i + 1;
    }

    // If all numbers from 1 to distinct.length are present, return next integer
    return distinct.length + 1;
}

// Test cases
console.log(solution([1, 3, 6, 4, 1, 2])); // Output: 5
console.log(solution([1, 2, 3]));          // Output: 4
console.log(solution([-1, -3]));           // Output: 1

  

arr = [1, 3, 6];
console.log(solution(arr));
