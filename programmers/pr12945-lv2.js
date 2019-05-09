function solution(n) {
    const mod = 1234567;
    var a = 1, b = 0, temp;
    while (n > 0) {
        temp = a;
        a = a % mod + b % mod;
        b = temp;
        n--;
    }
    return b % mod
}
// 피보나치 수
// 입출력 예
// n	return
// 3	2
// 5	5