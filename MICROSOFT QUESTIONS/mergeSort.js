// Use two functions
// find mid
// create left and right arrays
// create merge function
// initialize a sorted array
// compare left and right arrays
// push smaller value into sorted array

const mergeSort = (arr) => {
  // base case
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

const merge = (leftArr, rightArr) => {
  let sortedArr = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
};
arr = [8, -6, 20, -2, 4];
console.log(mergeSort(arr));
