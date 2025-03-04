const catAndMouse = (x, y, z) => {
  let catA = Math.abs(z - x);
  let catB = Math.abs(z - y);

  if (catA > catB) {
    return "Cat B";
  } else if (catB > catA) {
    return "Cat A";
  } else {
    return "Mouse C";
  }
};
console.log(catAndMouse(2, 5, 4));
console.log(catAndMouse(1, 2, 3));
console.log(catAndMouse(1, 3, 2));
