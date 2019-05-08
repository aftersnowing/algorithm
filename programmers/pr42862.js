function solution(n, lost, reserve) {
    lost = lost.filter((val) => {
        const index = reserve.indexOf(val);
        if (index !== -1) {
            reserve.splice(index, 1);
            return false
        }
        return true
    });
    let result = n - lost.filter((val) => {
        let valueIndex = 0;
        let reserveValue = reserve.find((el, i) => {
            if (Math.abs(val - el) === 1) {
                valueIndex = i
                return el
            }
        });
        if (reserveValue) {
            reserve.splice(valueIndex, 1);
            return false
        }
        return true
    }).length;
    return result
}
// 체육복
// 입출력 예
// n	lost	reserve	return
// 5	[2, 4]	[1, 3, 5]	5
// 5	[2, 4]	[3]	4
// 3	[3]	[1]	2