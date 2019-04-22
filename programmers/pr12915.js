function solution(strings, n) {
    return strings.sort((a,b) => a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]));
}
// 문자열 내 마음대로 정렬하기
// 입출력 예
// strings      	n	 return
// [sun, bed, car]	1	[car, bed, sun]
// [abce, abcd, cdx]	2	[abcd, abce, cdx]
