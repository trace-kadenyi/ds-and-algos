// ### **11. Find all palindrome substrings**

// **Problem Statement:** Given a string, find all non-single letter substrings that are palindromes.

// **Example:**

// An string input of `"poppopo"` would return `"pop"`, `"opo"`, `"oppo"`, and `"poppop"`.

const findAllPalindromeSubstrings = (str) => {
  // initialize a container for results
  let results = [];
  // define a palindrome
  const isPalindrome = (s) => s.split("").reverse().join("") === s;

  // loop through the string
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let substr = str.substring(i, j);
      if (substr.length > 2 && isPalindrome(substr)) {
        results.push(substr);
      }
    }
  }
  return results;
};

console.log(findAllPalindromeSubstrings("poppopo")); // Output: [ 'pop', 'opo', 'oppo', 'poppop' ]
