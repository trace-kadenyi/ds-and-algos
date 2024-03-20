const insertionSort = (arr) => {
  let shifted;

  do {
    shifted = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
      }
    }
  } while (shifted);
  return arr;
};

arr = [-6, 20, 8, 5, 90, 30, 54, -90];
console.log(insertionSort(arr));
