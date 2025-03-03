const migratoryBirds = (arr) => {
  let birdCount = {};

  for (const bird of arr) {
    birdCount[bird] = (birdCount[bird] || 0) + 1;
  }

  //  console.log(birdCount)
  let maxCount = 0,
    minBirdID = Infinity;

  for (const bird in birdCount) {
    if (
      birdCount[bird] > maxCount ||
      (birdCount[bird] === maxCount && bird < minBirdID)
    ) {
      maxCount = birdCount[bird];
      minBirdID = Number(bird);
    }
  }
  return minBirdID;
};

// console.log(migratoryBirds([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 1])); // Output: 1
// console.log(migratoryBirds([1, 4, 4, 4, 5, 3, 3, 3, 2, 2])); // Output: 4clear
console.log(migratoryBirds([5, 5, 5, 4, 4, 4, 3, 3])); // Output: 4
