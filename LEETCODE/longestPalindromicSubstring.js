// Given a string s, return the longest
// palindromic

// substring
//  in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

const longestPalindrome = (str) => {
  let results = [];
  // define a palindrome
  const isPalindrome = (s) => s.split("").reverse().join("") === s;

  // loop through the string
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let substr = str.substring(i, j);
      if (substr.length >= 2 && isPalindrome(substr)) {
        results.push(substr);
      }
    }
  }

  console.log(results);
  let maxlen = 0;

  for (let i = 0; i < results.length; i++) {
    if (results[i].length > maxlen) {
      maxlen = results[i].length;
    }
  }

  for (let i = 0; i < results.length; i++) {
    if (results[i].length === maxlen) {
      return results[i];
    }
  }
};

s = "poppopo";
console.log(longestPalindrome(s));
