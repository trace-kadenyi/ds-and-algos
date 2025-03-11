// Method 1
const factorial1 = (n) => {
  if (n === 0 || n === 1) return 1;
  return n * factorial1(n - 1);
};

// Method 2
const factorial2 = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

console.log(factorial1(5));
console.log(factorial2(5));
