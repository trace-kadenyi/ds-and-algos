function jumpingOnClouds(c, k) {
  let energy = 100;
  let i = 0;

  do {
    i = (i + k) % c.length;
    energy -= c[i] === 1 ? 3 : 1;
  } while (i != 0);
  return energy;
}

// (c = [0, 0, 1, 0, 0, 1, 1, 0]),
// (c = [0, 0, 1, 0]), (k = 2);
(c = [1, 1, 1, 0, 1, 1, 0, 0, 0, 0]), (k = 3);

console.log(jumpingOnClouds(c, k));
