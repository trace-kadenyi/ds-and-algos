// const breakingRecords = (scores) => {
//   let n = scores.length,
//     bestCount = 0,
//     worstCount = 0,
//     max = [scores[0]],
//     min = [scores[0]];

//   for (let i = 1; i < n; i++) {
//     if (scores[i] > max[0]) {
//       bestCount++;
//       max.pop();
//       max.push(scores[i]);
//     } else if (scores[i] < min[0]) {
//       worstCount++;
//       min.pop();
//       min.push(scores[i]);
//     }
//   }
//   return [bestCount, worstCount];
// };

const breakingRecords = (scores) => {
  let n = scores.length,
    bestCount = 0,
    worstCount = 0,
    best = scores[0],
    worst = scores[0];

  for (let i = 1; i < n; i++) {
    if (scores[i] > best) {
      best = scores[i];
      bestCount++;
    } else if (scores[i] < worst) {
      worst = scores[i];
      worstCount++;
    }
  }

  return [bestCount, worstCount];
};
scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];
// scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
console.log(breakingRecords(scores));
