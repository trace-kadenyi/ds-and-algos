// There are two wooden sticks of lengths A and B respectively. Each of them can be cut into shorter sticks of integer lengths. Our goal is to construct the largest possible square. In order to do this, we want to cut the sticks in such a way as to achieve four sticks of the same length (note that there can be some leftover pieces). What is the longest side of square that we can achieve?
// Write a function that given two integers, A, B returns the side length of the largest square that we can obtain. If it is not possible to create any square, the function should return 0.

// Examples
// 1. Given A = 10, B = 21, the function should return 7. We can split the second stick into three sticks of length 7 and shorten the first stick by 3.


// Given A =13 and B = 11. The function should return 5. We can cut two sticks of length 5 from each of the given sticks.
// Given A = 2, B = 1, the function should return 0. It is not possisble to make any square from the given sticks.
// Given A = 1, B - 8, the function should return 2.

// Assumptions
// A and B are integers with range [1...1,000,000,000]

function solution(A, B) {
 // Implement your solution here
 let totalLen = A + B;
 let maxLen = totalLen / 2;

 while(maxLen > 0) {
 let numOfSticksA = Math.floor(A / maxLen);
 let numOfSticksB = Math.floor(B / maxLen);
 console.log(numOfSticksA, numOfSticksB)

 if((numOfSticksA + numOfSticksB) >= 4) {
 return maxLen;
 } else {
 maxLen--;
 }
 }
 return 0;
}

A = 10
B = 21
console.log(solution(A, B))
