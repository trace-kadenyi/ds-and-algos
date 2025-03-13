const square = (a, b) => {
  // find smallest square int
  let start = Math.ceil(Math.sqrt(a));

  // find largest square int
  let end = Math.floor(Math.sqrt(b));

  return Math.max(0, end - start + 1);
};

console.log(square(24, 49));
