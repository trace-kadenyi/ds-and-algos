// find the largest number in an array
const findMaxNum = (arr) => {
  let maximum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maximum) {
      maximum = arr[i];
    }
  }
  return maximum;
};

arr = [20, 1, 5, 7, -20, 80, 54];
console.log(findMaxNum(arr));
