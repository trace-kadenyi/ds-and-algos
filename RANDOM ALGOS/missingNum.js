const missingNum = (arr) => {
    arr.sort((a,b) => a - b)

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== i + 1) return i + 1
    }
    return arr.length + 1
}
arr = [3, 7, 1, 2, 8, 4, 5]
// arr = [1, 2, 3, 4]
console.log(missingNum(arr))