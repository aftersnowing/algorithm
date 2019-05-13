function solution(a,b){
    a = a.sort((a,b) => a - b);
    b = b.sort((a,b) => b - a);
    return a.reduce((acc, cur, i) => {
        acc += cur * b[i];
        return acc
    }, 0);
}
// 최솟값 만들기
// 입출력 예
// A	          B	      answer
// [1, 4, 2]	[5, 4, 4]	29
// [1,2]	      [3,4]	    10