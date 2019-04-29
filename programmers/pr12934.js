function solution(n) {
    const x = Math.sqrt(n);
    return x === Math.floor(x) ? Math.pow(x + 1, 2): -1
}
// 정수 제곱근 판별
// n	return
// 121	144
// 3	-1