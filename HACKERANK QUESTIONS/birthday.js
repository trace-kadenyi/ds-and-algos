// Method 1
const birthday1 = (s, d, m) => {
  return s.reduce(
    (count, _, i) =>
      i <= s.length - m &&
      s.slice(i, i + m).reduce((sum, num) => sum + num, 0) === d
        ? count + 1
        : count,
    0
  );
};

// Method 2
const birthday2 = (s, d, m) => {
  let count = 0;

  for (let i = 0; i <= s.length - m; i++) {
    let sum = 0;

    // Sum the next 'm' elements starting from index 'i'
    for (let j = 0; j < m; j++) {
      sum += s[i + j];
    }

    // Check if sum matches 'd'
    if (sum === d) {
      count++;
    }
  }

  return count;
};

// Method 3
const birthday3 = (s, d, m) => {
  let count = 0,
    sum = 0;

  // First window sum (first m elements)
  for (let i = 0; i < m; i++) {
    sum += s[i];
  }

  if (sum === d) count++;

  // Slide window
  for (let i = 1; i <= s.length - m; i++) {
    sum = sum - s[i - 1] + s[i + m - 1]; // Subtract old element, add new one
    if (sum === d) count++;
  }

  return count;
};

// (s = [2, 2, 1, 3, 2]), (d = 4), (m = 2);
(s = [1, 2, 1, 3, 2]), (d = 3), (m = 2);
// (s = [1, 1, 1, 1, 1, 1]), (d = 3), (m = 2);
// (s = [4]), (d = 4), (m = 1);
console.log(birthday1(s, d, m));
console.log(birthday2(s, d, m));
console.log(birthday3(s, d, m));
