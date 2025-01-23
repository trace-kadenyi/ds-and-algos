// Method 1
const birthdayCakeCandles = (candles) => {
  let max = 0;
  let maxArr = [];

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] > max) {
      max = candles[i];
    }
  }

  candles.forEach((val) => {
    if (val === max) {
      maxArr.push(val);
    }
  });

  return maxArr.length;
};

// Method 2
const birthdayCakeCandles1 = (candles) => {
  let maxArr = [];

  candles.forEach((val) => {
    if (val === Math.max(...candles)) {
      maxArr.push(val);
    }
  });
  return maxArr.length;
};

// Method 3
const birthdayCakeCandles2 = (candles) => {
  let max = 0;
  let count = 0;

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] > max) {
      max = candles[i];
      count = 1;
    } else if (candles[i] === max) {
      count++;
    }
  }
  return count;
};
console.log(birthdayCakeCandles([3, 2, 1, 3]));
console.log(birthdayCakeCandles1([3, 2, 1, 3]));
console.log(birthdayCakeCandles2([3, 2, 1, 3]));
