function solution(arr, i) {
    let answer = 0;
    const newArr = arr.map((val, index) => {
        return {
            marker: index === i,
            val
        }
    });
    while (true) {
        var indexFirst = newArr.splice(0, 1)[0];
        if (newArr.some((el) => el.val > indexFirst.val)) {
            newArr.push(indexFirst);
        } else {
            answer++
            if (indexFirst.marker) { return answer }
        }
    }
}
// 프린터
// 입출력 예
// priorities	location	return
// [2, 1, 3, 2]	2	1
// [1, 1, 9, 1, 1, 1]	0	5