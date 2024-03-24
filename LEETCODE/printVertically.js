// 1324. Print Words Vertically
// Medium
// Topics
// Companies
// Hint
// Given a string s. Return all the words vertically in the same order in which they appear in s.
// Words are returned as a list of strings, complete with spaces when is necessary. (Trailing spaces are not allowed).
// Each word would be put on only one column and that in one column there will be only one word.

// Example 1:

// Input: s = "HOW ARE YOU"
// Output: ["HAY","ORO","WEU"]
// Explanation: Each word is printed vertically.
//  "HAY"
//  "ORO"
//  "WEU"
// Example 2:

// Input: s = "TO BE OR NOT TO BE"
// Output: ["TBONTB","OEROOE","   T"]
// Explanation: Trailing spaces is not allowed.
// "TBONTB"
// "OEROOE"
// "   T"
// Example 3:

// Input: s = "CONTEST IS COMING"
// Output: ["CIC","OSO","N M","T I","E N","S G","T"]

const printVertically = (s) => {
  // find longest string in s
  const words = s.split(" ");
  const maxLen = Math.max(...words.map((word) => word.length));
  // create an array of strings with maxLen spaces
  const res = Array.from({ length: maxLen }, () => "");

  // push each character to the corresponding string in res
  for (const word of words) {
    for (let i = 0; i < maxLen; i++) {
      res[i] += i < word.length ? word[i] : " ";
    }
  }

  // remove trailing spaces
  return res.map((word) => word.replace(/\s+$/, ""));
};

s = "CONTEST IS COMING";
console.log(printVertically(s));
