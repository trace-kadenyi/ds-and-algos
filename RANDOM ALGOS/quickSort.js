const quickSortAlgo = (arr) => {
    let pivot = arr[arr.length - 1]
    if(arr.length < 2) {
        return arr;
    }

    let left = []
    let right = []

    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSortAlgo(left), pivot, ...quickSortAlgo(right)]

}

arr = [-6, 20, 8, 5, 90, 30, 54, -90];
console.log(quickSortAlgo(arr))