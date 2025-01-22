const plusMinus = (arr) => {
    let positives = 0, negatives = 0, zeroes = 0, n = arr.length;

    for(let i = 0; i < n; i++) {
        if(arr[i] > 0) {
            positives++
        } else if(arr[i] < 0) {
            negatives++
        } else {
            zeroes++
        }
    }

    console.log((positives/n).toFixed(6))
    console.log((negatives/n).toFixed(6))
    console.log((zeroes/n).toFixed(6))
}

arr = [1, 1, 0, -1, -1]
console.log(plusMinus(arr))