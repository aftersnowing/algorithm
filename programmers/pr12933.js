function solution(n) {
    return n.toString().split('').sort((a,b) => b - a).join('') / 1
}
// 정수 내림차순으로 배치하기
// 입출력 예
// n	return
// 118372	873211