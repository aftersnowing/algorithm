function solution(arr1, arr2) {
    return arr1.map((val,i) => val.map((el,j) => el + arr2[i][j]))
}
// 행렬의 덧셈
// 입출력 예
// arr1	arr2	return
// [[1,2],[2,3]]	[[3,4],[5,6]]	[[4,6],[7,9]]
// [[1],[2]]	[[3],[4]]	[[4],[6]]