function solution(n) {
    const originalN = n;
    let count = 0;
    let counterCount = 0;
    while (n > 0.5) {
        if (n % 2 === 1) count++
        n = Math.floor(n / 2);
    }
    for (var i = originalN + 1; count !== counterCount; i++) {
        counterCount = 0;
        let counterN = i;
        while (counterN > 0.5) {
            if (counterN % 2 === 1) counterCount++
            counterN = Math.floor(counterN / 2);
        }
    }
    return i - 1
}
// 다음 큰 숫자
// 입출력 예
// n	result
// 78	83
// 15	23
