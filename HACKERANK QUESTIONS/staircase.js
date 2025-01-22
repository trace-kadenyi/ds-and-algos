const staircase = (n) => {
  for (let i = 1; i <= n; i++) {
    let s = " ".repeat(n - i);
    let h = "#".repeat(i);
    console.log(s + h);
  }
};

console.log(staircase(4));
