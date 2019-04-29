function solution(arr) {
    var min = Math.min.apply(null, arr);
    return arr.length > 1 ? arr.filter(el => el !== min) : [-1]
}
// 제일 작은 수 제거하기
// arr	      return
// [4,3,2,1]	[4,3,2]
// [10]     	[-1]