const findDigits = (n) => {
  let count = 0;
  let arr = String(n).split("");

  for (const num of arr) {
    if (n % Number(num) === 0) count++;
  }
  return count;
};
console.log(findDigits(111));
