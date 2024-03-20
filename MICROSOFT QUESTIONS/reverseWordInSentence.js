// ### **10. Reverse words in a sentence**

// **Problem Statement**: Reverse the order of words in a given sentence.

// **Example**: `"sphinx of black quartz judge my vow"` should output as `"vow my judge quartz black of sphinx"`

const reverseWords = (str) => {
  return str.split(" ").reverse().join(" ");
};

str = "sphinx of black quartz judge my vow";
console.log(reverseWords(str));
