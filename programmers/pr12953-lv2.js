function solution(arr) {
    let maxNum = Math.max(...arr);
    let LCM = null;
    let isLCM = 1;
    let multiply = 1;
    while(isLCM) {
        LCM = maxNum * multiply;
        isLCM = arr.reduce((acc, cur) => {
            return acc + (LCM % cur)
        }, 0);
        multiply++
    }
    return LCM
}
// N개의 최소공배수
// 입출력 예
// arr	result
// [2,6,8,14]	168
// [1,2,3]	6