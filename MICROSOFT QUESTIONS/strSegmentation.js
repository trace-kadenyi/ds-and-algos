// ### **12. String segmentation**

// **Problem Statement**: Given a dictionary of words and a large input string, find whether or not the input string can be completely segmented into the words of that dictionary.

const canBeSegmented = (dictionary, str) => {
    // Create a set from the dictionary for constant-time lookups
    const wordSet = new Set(dictionary);
    
    // Initialize an array to keep track of whether each prefix of the string is in the dictionary
    const dp = new Array(str.length + 1).fill(false);
    dp[0] = true; // Empty string is always in the dictionary
    
    // Loop through the string and update dp[i] based on whether dp[j] is true and str.substring(j, i) is in the dictionary
    for (let i = 1; i <= str.length; i++) {
      for (let j = 0; j < i; j++) {
        if (dp[j] && wordSet.has(str.substring(j, i))) {
          dp[i] = true;
          break;
        }
      }
    }
    
    // Return dp[str.length], which indicates whether the entire string can be segmented
    return dp[str.length];
  };
  
  console.log(canBeSegmented(["this", "is", "a", "test"], "thisisatest")); // Output: true
  console.log(canBeSegmented(["i", "am", "ace"], "iamaace")); // Output: false
