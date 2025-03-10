const singleNum = (arr) => {
    return arr.reduce((a, c) => a ^ c, 0);
  };
  
  console.log(singleNum([2, 2, 1])); // Output: 1
  console.log(singleNum([4, 1, 2, 1, 2])); // Output: 4
  console.log(singleNum([7, 3, 5, 5, 3])); // Output: 7
  