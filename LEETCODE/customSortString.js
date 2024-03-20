// Medium
// You are given two strings order and s. All the characters of order are unique and were sorted in some custom order previously.

// Permute the characters of s so that they match the order that order was sorted. More specifically, if a character x occurs before a character y in order, then x should occur before y in the permuted string.

// Return any permutation of s that satisfies this property

// Example 1:

// Input:  order = "cba", s = "abcd"

// Output:  "cbad"

// Explanation: "a", "b", "c" appear in order, so the order of "a", "b", "c" should be "c", "b", and "a".

// Since "d" does not appear in order, it can be at any position in the returned string. "dcba", "cdba", "cbda" are also valid outputs.

// Example 2:

// Input:  order = "bcafg", s = "abcd"

// Output:  "bcad"

// Explanation: The characters "b", "c", and "a" from order dictate the order for the characters in s. The character "d" in s does not appear in order, so its position is flexible.

// Following the order of appearance in order, "b", "c", and "a" from s should be arranged as "b", "c", "a". "d" can be placed at any position since it's not in order. The output "bcad" correctly follows this rule. Other arrangements like "bacd" or "bcda" would also be valid, as long as "b", "c", "a" maintain their order.

// SOLUTION PLAN

// 1. identify all the letters in order that are also in s
// 2. Rearrange them all to match the order in which they appear in order
// 3. concat any remaining letters not in s

// const customSortString = (order, s) => {
//   const arr1 = order.split("");
//   const arr2 = s.split("");
//   const commonChars = arr1.filter((chars) => arr2.includes(chars));

//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < commonChars.length; j++) {
//       if (commonChars[j] === arr1[i]) {
//         const temp = commonChars[j];
//         commonChars[j] = commonChars[i];
//         commonChars[i] = temp;
//       }
//     }
//   }
//   const remainingChars = arr2.filter((chars) => !arr1.includes(chars));
//   return commonChars.join("") + remainingChars.join("");
// };

// // (order = "bcafg"), (s = "abcd"); // Output:  "bcad"
// // (order = "cba"), (s = "abcd"); // Output:  "cbad"
// order = "kqep"; s = "pekeq"; // Output:  "kqeep"
// console.log(customSortString(order, s));

const customSortString = (order, s) => {
  // Count occurrences of characters in s
  const charCount = {};
  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  console.log(charCount);

  let result = "";

  // Append characters in the order specified by 'order'
  for (let char of order) {
    if (charCount[char]) {
      result += char.repeat(charCount[char]);
      delete charCount[char];
    }
  }

  // Append any remaining characters from s
  for (let char in charCount) {
    result += char.repeat(charCount[char]);
  }

  return result;
};

// Example usage:
console.log(customSortString("cba", "abcd")); // Output: "cbad"
console.log(customSortString("bcafg", "abcd")); // Output: "bcad"
console.log(customSortString("kqep", "pekeq")); // Output:  "kqeep"
