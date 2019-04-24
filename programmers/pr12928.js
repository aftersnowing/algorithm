function solution(n) {
    var result = 0;
    for(let i = 1; i <= n; i++){
        n % i === 0 ? result += i : null
    }
    return result
}
// 약수의 합
// n	return
// 12	28
// 5	6