function solution(d, budget) {
    let sum = 0;
    d = d.sort((a,b) => a -b);
    for(var i = 0; sum <= budget; i++){
        sum += d[i];
    }
    return i - 1
}
// 예산
// 입출력 예
// d	budget	result
// [1,3,2,5,4]	9	3
// [2,2,3,3]	10	4


