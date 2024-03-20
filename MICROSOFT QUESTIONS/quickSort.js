const quickSort = (arr) => {
  // find pivot
  // initialize left and right arrays
  // loop
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  // base case
  if (arr.length < 2) {
    return arr;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};

arr = [8, -6, 20, -2, 4];
console.log(quickSort(arr));
