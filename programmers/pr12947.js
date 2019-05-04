function solution(x) {
    return x % (x + '').split('').map(Number).reduce((acc,cur) => acc + cur) === 0
}
// 하샤드 수
// 입출력 예
// arr	return
// 10	true
// 12	true
// 11	false
// 13	false