const designerPdfViewer = (h, word) => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let store = {};

  // assign key/value pairs
  for (const letter of alphabet) {
    let index = alphabet.indexOf(letter);
    store[letter] = h[index];
  }
  // find heights of the word
  let heights = word.split("").map((w) => store[w]);

  let area = Math.max(...heights) * heights.length;
  return area;
};

(h = [
  1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 1, 1, 5, 5, 1, 5, 2, 5, 5, 5, 5, 5, 5,
]),
  (word = "torn");
console.log(designerPdfViewer(h, word));
