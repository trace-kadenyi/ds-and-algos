function insertionSort(array) {
    const length = array.length;
  
    for (let i = 1; i < length; i++) {
      let current = array[i];
      let j = i - 1;
  
      while (j >= 0 && array[j] > current) {
        array[j + 1] = array[j];
        j--;
      }
      
      array[j + 1] = current;
    }
  
    return array;
  }
  
  // Example usage:
  const unsortedArray = [5, 3, 8, 4, 2, 9, 1, 6, 7];
  const sortedArray = insertionSort(unsortedArray);
  console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  