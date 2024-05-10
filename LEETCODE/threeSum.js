// 15. 3Sum
// Medium
// Topics
// Companies
// Hint
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// Constraints:

// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105

// const threeSum = (nums) => {
//   let container = {};
//   for (let i = 0; i < nums.length; i++) {
//     let first = nums[i];
//     for (let j = i + 1; j < nums.length; j++) {
//       let second = nums[j];
//       for (let k = j + 1; k < nums.length; k++) {
//         let third = nums[k];

//         if (first + second + third === 0) {
//           let arr = [first, second, third].sort((a, b) => a - b);
//           container[arr] = arr;
//         }
//       }
//     }
//   }
//   return Object.values(container);
// };

// const threeSum = (nums) => {
//   const ans = [];

//   if (nums.length < 3) return ans;

//   nums.sort((a, b) => a - b);

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > 0) break;

//     if (i > 0 && nums[i] === nums[i - 1]) continue;

//     let left = i + 1,
//       right = nums.length - 1;
//     while (left < right) {
//       const sum = nums[i] + nums[left] + nums[right];

//       if (sum === 0) {
//         ans.push([nums[i], nums[left], nums[right]]);
//         left++;
//         right--;
//         while (left < right && nums[left] === nums[left - 1]) left++;
//         while (left < right && nums[right] === nums[right + 1]) right--;
//       } else if (sum < 0) left++;
//       else if (sum > 0) right--;
//     }
//   }
//   return ans;
// };

const threeSum = (nums) => {
  if (nums.length === 0) return [];

  nums = nums.sort((a, b) => a - b);

  let res = [];

  for (let i = 0; i < nums.length - 2; i++) {
    // stop duplicates from occurring
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];

      if (sum === 0) {
        res.push([nums[i], nums[j], nums[k]]);
        // stop duplicates
        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k + 1]) k--;
        j++;
        k--;
      } else if (sum < 0) j++;
      else k--;
    }
  }
  return res;
};
let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums)); // [[-1,-1,2],[-1,0,1]]
