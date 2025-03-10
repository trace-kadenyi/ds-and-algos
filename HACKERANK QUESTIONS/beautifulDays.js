const beautifulDays = (i, j, k) => {
  let nums = [i];
  //   create nums array
  for (let x = i; x < j; x++) {
    nums.push(x + 1);
  }

  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    // reverse and subtract then divide
    let reversed = Number(String(nums[i]).split("").reverse().join(""));
    if ((nums[i] - reversed) % k === 0) count++;
  }
  return count;
};

(i = 20), (j = 23), (k = 6);
console.log(beautifulDays(i, j, k));
