const kangaroo = (x1, v1, x2, v2) => {
    if((x2 - x1) % (v1 - v2) === 0 && (x1 < x2) === (v1 > v2)) {
        return "YES"
    }
    return "NO"
}

// console.log(kangaroo(0, 2, 5, 3))
console.log(kangaroo(2, 1, 1, 2))