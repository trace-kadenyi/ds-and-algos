function isContained(input1, input2) {
  // Function to count occurrences of characters in a string
  const countCharacters = (str) => {
    const charCount = {};
    //     for (let char of str) {
    //       charCount[char] = (charCount[char] || 0) + 1;
    //     }
    //     return charCount;
    //   };

    for (var i = 0; i < str.length; i++) {
      var char = str[i];
      charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
  };
  // Count occurrences of characters in both strings
  const countX = countCharacters(input1.toLowerCase());
  const countY = countCharacters(input2.toLowerCase());

  // Check if countY is a subset of countX
  for (let char in countY) {
    if (!countX[char] || countX[char] < countY[char]) {
      return "no";
    }
  }
  return "yes";
}

// Test cases
console.log(isContained("abac", "ab")); // Output: yes
console.log(isContained("abab", "baaa")); // Output: no
console.log(isContained("JavaScript", "script")); // Output: yes
console.log(isContained("abab", "baba")); // Output: yes
