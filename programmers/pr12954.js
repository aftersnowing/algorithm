function solution(x, n) {
    return Array(n).fill(x).map((el, index) => el * (index + 1))
}
// x만큼 간격이 있는 n개의 숫자
// 입출력 예
// x	n	answer
// 2	5	[2,4,6,8,10]
// 4	3	[4,8,12]
// -4	2	[-4, -8]