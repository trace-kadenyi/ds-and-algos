const cutTheSticks = (arr) => {
  let count = [];
  arr.sort((a, b) => a - b);

  let i = 0;

  while (i < arr.length) {
    count.push(arr.length - i);

    let current = arr[i];

    while (i < arr.length && arr[i] === current) {
      i++;
    }
  }
  return count;
};

arr = [5, 4, 4, 2, 2, 8];
console.log(cutTheSticks(arr));
