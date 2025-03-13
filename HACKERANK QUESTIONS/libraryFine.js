const libraryFine = (d1, m1, y1, d2, m2, y2) => {
  let fine = 0;
  if (m1 === m2 && y1 === y2 && d1 > d2) {
    fine = (d1 - d2) * 15;
  } else if (m1 > m2 && y1 === y2) {
    fine = (m1 - m2) * 500;
  } else if (y1 > y2) {
    fine = 10000;
  }
  return fine;
};

console.log(libraryFine(14, 7, 2018, 5, 7, 2018));
console.log(libraryFine(9, 6, 2017, 6, 6, 2015))
