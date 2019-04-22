function solution(arr, divisor) {
    const result =  arr.sort((a,b) => a - b).filter((el) => el % divisor === 0);
    return result.length === 0 ? [-1] : result
}
// 나누어 떨어지는 숫자 배열
// arr	divisor	return
// [5, 9, 7, 10]	5	[5, 10]
// [2, 36, 1, 3]	1	[1, 2, 3, 36]
// [3,2,6]	10	[-1]