// Method 1
const compareTriplets1 = (a, b) => {
  if (a.length !== b.length) {
    return "Uneven pairs";
  }

  let aPoints = 0;
  let bPoints = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      aPoints++;
    } else if (a[i] < b[i]) {
      bPoints++;
    }
  }

  return [aPoints, bPoints];
};

// Method 2
const compareTriplets2 = (a, b) => {
  if (a.length !== b.length) {
    return "Uneven pairs";
  }

  let aPoints = 0;
  let bPoints = 0;

  a.map((val, i) => {
    val > b[i] ? aPoints++ : val < b[i] ? bPoints++ : null;
  });
  return [aPoints, bPoints];
};

// Method 3
const compareTriplets3 = (a, b) => {
  if (a.length !== b.length) {
    return "Uneven pairs";
  }

  let aPoints = 0;
  let bPoints = 0;

  a.forEach((val, i) => {
    if (val > b[i]) {
      aPoints++;
    } else if (val < b[i]) {
      bPoints++;
    }
  });
  return [aPoints, bPoints];
};

a = [12, 3, 56, 30, 256];
b = [9, 15, 60, 3, 122];
console.log(compareTriplets1(a, b));
console.log(compareTriplets2(a, b));
console.log(compareTriplets3(a, b));
