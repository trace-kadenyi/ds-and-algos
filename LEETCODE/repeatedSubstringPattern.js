// Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

// Example 1:

// Input: s = "abab"
// Output: true
// Explanation: It is the substring "ab" twice.
// Example 2:

// Input: s = "aba"
// Output: false
// Example 3:

// Input: s = "abcabcabcabc"
// Output: true
// Explanation: It is the substring "abc" four times or the substring "abcabc" twice.

function repeatedSubstringPattern(s) {
  const len = s.length;
  for (let i = 1; i <= Math.floor(len / 2); i++) {
    if (len % i === 0) {
      const substring = s.substring(0, i);
      let j = i;
      while (j < len) {
        if (s.substring(j, j + i) !== substring) {
          break;
        }
        j += i;
      }
      if (j === len) {
        return true;
      }
    }
  }
  return false;
}

// Test cases
console.log(repeatedSubstringPattern("abab")); // Output: true
console.log(repeatedSubstringPattern("aba")); // Output: false
console.log(repeatedSubstringPattern("abcabcabcabc")); // Output: true
