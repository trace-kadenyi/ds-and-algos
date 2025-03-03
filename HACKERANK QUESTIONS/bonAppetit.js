const bonAppetit = (bill, k, b) => {
  let remove = bill[k];

  let actual = (bill.reduce((a, c) => a + c, 0) - remove) / 2;

  if (actual === b) return "Bon Appetit";
  return b - actual;
};

(bill = [3, 10, 2, 9]), (k = 1), (b = 12);
console.log(bonAppetit(bill, k, b));
