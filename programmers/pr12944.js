function solution(arr) {
    return arr.reduce((acc,cur) => acc + cur) / arr.length
}
// 평균 구하기
// 입출력 예
// arr	return
// [1,2,3,4]	2.5
// [5,5]	5