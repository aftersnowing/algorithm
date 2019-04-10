function solution(n) {
    let arr = [2];
    let result = 2;
    for (let i = 3; i <= n; i += 2) {
        var p = Math.floor(Math.sqrt(i));
        for (var j = 0; j < arr.length; j++) {
            if (i % arr[j] === 0 || arr[j] > p) {
                break;
            }
        }
        if (arr[j] > p) {
            arr.push(i);
            result += i;
        }
    }
    return result;
}
// n까지 소수 찾아서 합 (자바스크립트로 구현하여 효율성테스트는 하지 못함)