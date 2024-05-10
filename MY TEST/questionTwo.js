// You are given two arrays, A and B each made of N integers. They represent a grid with N columns and 2 rows, where A is the upper row and B is the lower row. 

// Your task is to from the upper-left cell (represented by A[0] to the bottom right cell represented by B[N - 1] moving only right and down, so that the maximum value over which you pass is as small as possible.

// Wrhite a function that given two arrays of integers, A and B, of length N returns the maximum value on the optimal path.

// Examples
// 1. Given A = [3, 4, 6], B= [6, 5, 4] the function should return 5. The optimal path is 3 -> 4 -> 5 -> 4
// 👏
// 👍
// 👎
// 😊
// 😞


// Given A = [1, 2, 1, 1, 1, 4], B = [1, 1, 1, 3, 1, 1], the function should return 2.

// Given A = [-5, -1, -3], B =[-5, 5, -2] the function should return  -1. The optimal path is -5 -> -1 -> -3 -> 2

// N is an integer within the range [1...100,000]
// each element of arrays A and B is an integer within the range [-1,000,000,000 ... 1, 000,000,000]