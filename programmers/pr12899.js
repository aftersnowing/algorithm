function solution(n) {
    let result = ''
    while(n !== 0){
        let r = n % 3;
        n = Math.floor((n - 1) / 3);   
        result = [4, 1, 2][r] + result;
    }
    return result
}
// 124 나라의 숫자
// n	result
// 1	1
// 2	2
// 3	4
// 4	11