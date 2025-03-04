//  Method 1
const sockMerchant = (n, ar) => {
  let sockCount = {};

  for (const sock of ar) {
    sockCount[sock] = (sockCount[sock] || 0) + 1;
  }

  const filteredSocks = Object.fromEntries(
    Object.entries(sockCount).filter(([key, value]) => value >= 2)
  );

  let keyPairs = Object.values(filteredSocks);

  console.log(keyPairs.map((key) => Math.floor(key % 2)));

  return keyPairs.map((key) => Math.floor(key / 2)).reduce((a, c) => a + c, 0);
};

(ar = [1, 2, 1, 2, 1, 3, 2]), (n = 7);
// (ar2 = [10, 20, 20, 10, 10, 30, 50, 10, 20]), (n = 9);
// console.log(sockMerchant(n, ar));

// Method 2
const sockMerchant2 = (n, ar) => {
    let sockCount = {}
    let pairs = 0;

    for(const sock of ar) {
        sockCount[sock] = (sockCount[sock] || 0) + 1;

        if(sockCount[sock] % 2 === 0) pairs++
    }
    return pairs
}


// (ar = [1, 2, 1, 2, 1, 3, 2]), (n = 7); 
// (ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]), (n = 9);
console.log(sockMerchant2(n, ar));
