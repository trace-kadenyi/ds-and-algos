// You are given a string consisting of lowercase letters of the English alphabet. You must split this string into a minimal number of substrings in such a way that no letter occurs more than once in each substring. For example, here are some correct splits of the string "abacdec". ("a", "bac", "dec"), ("a", "bacd", "ec"), ("ab", "ac", "dec"), ("ab", "acd", "ec").

// Write a function that, given a string S of length N, returns the length of the minimal number of substrings into which the string must be split.

// Examples:
// 1. Given "world", your function should return 1. There is no need to split the string into substrings as all letters occur just once.

// 2. Given "dddd", your function should return 4. The result can be achieved by splitting the string into four substrings ('d', 'd', 'd', 'd').

// 3. Given "cycle", your function should return 2. The result can be achieved by splitting the string into two substrings ('c', 'ycle').

// 4. Given "abba", your function should return 2. The result can be achieved by splitting the string into two substrings ('ab', 'ba').

// Write an efficient algorithm for the following assumptions:.

// N is an integer within the range [1..1,000,000];
// // string S consists only of lowercase letters (a-z).

// const minSubstrings = (str) => {
//     let charCount = {};

//     // Iterate over each character in the string
//     for (let char of str) {
//       // Increment the count for this character
//       charCount[char] = (charCount[char] || 0) + 1;

//       // Check if the count for this character is greater than 1 (meaning it repeats)
//       if (charCount[char] < 1) {
//         return 1;
//       } else {
//         return 1
//       }
//     }

//     // If no characters repeated, return false
//     // return false;
// };

// console.log(minSubstrings("world")); // 1

const minNumberOfSubstrings = (str) => {
  // initialize a map to store the last occurrence of each character
  const latestAppearance = new Map();
  // initialize the output at 0 to count the number of substrings
  let output = 0;
  // set to -1 to ensure that latestAppearance.get(char) > latestIndex is always true
  let latestIndex = -1;

  // check if all characters are the same and return the length of the string
  if (str.split("").every((c) => c === str[0])) {
    return str.length;
  }

  //   loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // If we encounter a repeated character, split the string and increment the output count by 1 and update the latestIndex
    if (
      latestAppearance.has(char) &&
      latestAppearance.get(char) > latestIndex
    ) {
      output++;
      latestIndex = i;
    } else if (
      latestAppearance.has(char) &&
      latestAppearance.get(char) <= latestIndex
    ) {
      // reset the latestIndex to -1 if the character has appeared before the latestIndex
      latestIndex = -1;
    }

    // update the latest appearance of the character
    latestAppearance.set(char, i);
  }
  //   return the output count + 1 to account for the final substring
  return output + 1;
};

// Example usage:
console.log(minNumberOfSubstrings("abacdec")); // Output: 3
console.log(minNumberOfSubstrings("world")); // Output: 1
console.log(minNumberOfSubstrings("dddd")); // Output: 4
console.log(minNumberOfSubstrings("cycle")); // Output: 2
console.log(minNumberOfSubstrings("abba")); // Output: 2
console.log(minNumberOfSubstrings("dddd")); // Output: 4
console.log(minNumberOfSubstrings("eeee")); // Output: 4
