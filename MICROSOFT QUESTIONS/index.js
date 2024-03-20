const findSumEq = (arr, val) => {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j <= arr.length; j++) {
      if(arr[i] + arr[j] === val) {
        return true
      }
    }
  }
  return false
}

console.log(findSumEq([1, 2, 3, 4, 9], 9))