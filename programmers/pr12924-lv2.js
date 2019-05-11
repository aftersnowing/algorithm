function solution(n) {
    let result = 0;
    let start = 1;
    while(start <= n) {
        let sum = 0;
        for(var i = start; sum < n; i++){
            sum += i;
        }
        if(sum === n) result++;
        start++;
    }
    return result
}
// 숫자의 표현
// 
// 1 + 2 + 3 + 4 + 5 = 15
// 4 + 5 + 6 = 15
// 7 + 8 = 15
// 15 = 15
// 
// 입출력 예
// n	result
// 15	4