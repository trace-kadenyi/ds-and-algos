const saveThePrisoner = (n, m, s) => {
  let lastPrisoner = (s + m - 1) % n;

  return lastPrisoner === 0 ? n : lastPrisoner;
};

console.log(saveThePrisoner(5, 2, 1)); // Output: 2
console.log(saveThePrisoner(7, 19, 2)); // Output: 6
console.log(saveThePrisoner(3, 7, 3)); // Output: 3
