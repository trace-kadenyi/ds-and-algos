

function countPalindromes(input1, input2) {
  let results = [];

  // Define a palindrome checker function
  const isPalindrome = function (s) {
    return s === s.split("").reverse().join("");
  };

  let newInput1 = input1.split(" ");

  // Loop through the string to generate all possible substrings
  for (let i = 0; i < newInput1.length; i++) {
    if (isPalindrome(newInput1[i])) {
      results.push(newInput1[i]);
    }
  }
  return results.length;
}

console.log(countPalindromes("this is level 71", 16)); // Output: 1
console.log(countPalindromes("hello world", 11)); // Output: 0
