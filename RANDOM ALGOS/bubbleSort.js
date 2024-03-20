const bubbleSortAscending = (arr) => {
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
};

// bubble sort descending
const bubbleSortDescending = (arr) => {
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
};

arr = [-6, 20, 8, 5, 90, 30, 54, -90];
console.log(bubbleSortDescending(arr));
