// 16. Partition Equal Subset Sum
// Medium
// Topics
// Companies
// Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.

// Example 1:

// Input: nums = [1,5,11,5]
// Output: true
// Explanation: The array can be partitioned as [1, 5, 5] and [11].
// Example 2:

// Input: nums = [1,2,3,5]
// Output: false
// Explanation: The array cannot be partitioned into equal sum subsets.

function canPartition(nums) {
  const totalSum = nums.reduce((acc, num) => acc + num, 0);

  // If the total sum is odd, it cannot be divided into two equal subsets
  if (totalSum % 2 !== 0) {
    return false;
  }

  const target = totalSum / 2;
  const dp = new Array(target + 1).fill(false);
  dp[0] = true;

  for (const num of nums) {
    for (let i = target; i >= num; i--) {
      dp[i] = dp[i] || dp[i - num];
    }
  }

  return dp[target];
}

// Test cases
const nums1 = [1, 5, 11, 5];
console.log(canPartition(nums1)); // Output: true

const nums2 = [1, 2, 3, 5];
console.log(canPartition(nums2)); // Output: false
