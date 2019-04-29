function solution(n){
    var arrN = (n + '').split('').map(Number)
    return arrN.reduce((acc, cur) => acc + cur)
}
// 자릿수 더하기
// N	answer
// 123	6
// 987	24