function repeatedString(s, n) {
  //  find no. of as in s
  let numAs = 0;

  for (const letter of s) {
    if (letter === "a") numAs++;
  }

  // find how many times s goes into n
  let numTimes = Math.floor(n / s.length);

  let rem = n % s.length;
  let remCount = 0;

  for (let i = 0; i < rem; i++) {
    if (s[i] === "a") remCount++;
  }
  return numAs * numTimes + remCount;
}

console.log(repeatedString("aba", 10));
