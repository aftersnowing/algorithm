function solution(arr) {
    arr = arr.reverse();
    let result = arr.map((val, i) => {
        var index = 0;
        arr.slice(i+1).some((el, j) =>{
            if(val < el) {
                index = arr.length - 1 - i - j;
                return true
            }
        });
        return index
    });
    return result.reverse()
}
// 탑
// 입출력 예
// heights	return
// [6,9,5,7,4]	[0,0,2,2,4]
// [3,9,9,3,5,7,2]	[0,0,0,3,3,3,6]
// [1,5,3,6,7,6,5]	[0,0,2,0,0,5,6]