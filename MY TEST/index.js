function solution(A, B) {
    // Implement your solution here
    let totalLen = A + B;
    let maxLen = Math.floor(totalLen / 2);
   
    while(maxLen > 0) {
    let numOfSticksA = Math.floor(A / maxLen);
    let numOfSticksB = Math.floor(B / maxLen);
    console.log(numOfSticksA, numOfSticksB)
   
    if((numOfSticksA + numOfSticksB) >= 4) {
    return maxLen;
    } else {
    maxLen--;
    }
    }
    return 0;
   }

    A = 13
    B = 11
    console.log(solution(A, B))