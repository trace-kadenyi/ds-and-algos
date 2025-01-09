// const arrSum = (len, arr) => {
//   let count = 0;
//   for (let i = 0; i < len; i++) {
//     count += arr[i];
//   }
//   return count;
// };

// console.log(arrSum(6, [1, 2, 3, 4, 10, 11]));


function simpleArraySum(ar) {
    let count = 0;
    for(let i = 0; i < ar.length; i++) {
        count += ar[i]
    }
    return count;

}

console.log(simpleArraySum([1, 2, 3, 4, 10, 11]));