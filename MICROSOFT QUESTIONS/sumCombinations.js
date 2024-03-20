function combinationSum(target) {
    const result = [];
    
    function backtrack(remaining, current, start) {
      if (remaining < 0) return; // If remaining is negative, stop
      if (remaining === 0) { // If remaining is 0, push current into result
        result.push(current.slice());
        return;
      }
      
      for (let i = start; i < target; i++) {
        current.push(i); // Push current number
        backtrack(remaining - i, current, i); // Recursive call
        current.pop(); // Remove last number, and try a different one
      }
    }
    
    backtrack(target, [], 1);
    
    return result;
  }
  
  // Example usage:
  const target = 5;
  console.log(combinationSum(target)); // Output: [ [ 1, 1, 1, 1, 1 ], [ 1, 1, 1, 2 ], [ 1, 2, 2 ], [ 1, 1, 3 ], [ 2, 3 ], [ 1, 4 ]]
  