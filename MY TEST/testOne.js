function solution(A, B) {
    // Implement your solution here
    let totalLen = A + B;
    let maxLen = Math.floor(totalLen / 2); // A = 13, B = 11, totalLen = 24, maxLen = 12

    while(maxLen > 0) {
        let numOfSticksA = Math.floor(A / maxLen); // 13 / 12 = 1, 13 / 11 = 1, 13 / 10 = 1, 13 / 9 = 1, 13 / 8 = 1, 13 / 7 = 1, 13 / 6 = 2, 13 / 5 = 2
        let numOfSticksB = Math.floor(B / maxLen); // 11 / 12 = 0, 11 / 11 = 1, 11 / 10 = 1, 11 / 9 = 1, 11 / 8 = 1, 11 / 7 = 1, 11 / 6 = 1, 11 / 5 = 2

        if((numOfSticksA + numOfSticksB) >= 4) { // 1 + 0 = 1 < 4, 1 + 1 = 2 < 4, 1 + 1 = 2 < 4, 1 + 1 = 2 < 4, 1 + 1 = 2 < 4, 1 + 1 = 2 < 4, 2 + 1 = 3 < 4, 2 + 2 = 4 >= 4
            return maxLen; // 5
        } else {
            maxLen--; // 12 - 1 = 11, 11 - 1 = 10, 10 - 1 = 9, 9 - 1 = 8, 8 - 1 = 7, 7 - 1 = 6, 6 - 1 = 5
            
        }
    }
    return 0;
}

A = 13
B = 11
console.log(solution(A, B))