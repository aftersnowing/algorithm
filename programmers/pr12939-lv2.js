function solution(s) {
    s = s.split(' ');
    return Math.min(...s) + ' ' + Math.max(...s)
}
// 최댓값과 최솟값
// 입출력 예
// s	return
// 1 2 3 4	1 4
// -1 -2 -3 -4	-4 -1
// -1 -1	-1 -1