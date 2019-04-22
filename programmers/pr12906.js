function solution(arr) {
    return arr.filter((el,i) => el !== arr[i + 1])
}
// 같은 숫자는 싫어
// arr	answer
// [1,1,3,3,0,1,1]	[1,3,0,1]
// [4,4,4,3,3]	[4,3]
