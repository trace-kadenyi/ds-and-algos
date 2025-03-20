const equalizeArray = (arr) => {
  // find the number that appears most times in the array
  let container = {};
  for (const num of arr) {
    container[num] = (container[num] || 0) + 1;
  }

  // find num that occurs most frequently
  const findMax = (obj) =>
    Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));
  let commonNum = Number(findMax(container));

  if (commonNum > 1) {
    let newArr = arr.filter((num) => num !== commonNum);
    return newArr.length;
  }
  return arr.length - 1;
};

// Method 2
const equalizeArray1 = (arr) => {
  const freq = {};

  for (const num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }

  let maxVal = Math.max(...Object.values(freq));

  return arr.length - maxVal;
};
arr = [3, 3, 2, 1, 3];
// arr = [1, 2, 2, 3];
// arr = [1, 9, 7, 4, 5];
console.log(equalizeArray1(arr));
