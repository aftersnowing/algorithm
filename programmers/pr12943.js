function solution(num) {
    let count = 0;
    while (count <= 500) {
        if (num === 1) {
            return count
        } else if (num % 2 === 0) {
            num = num / 2;
        } else if (num % 2 !== 0) {
            num = num * 3 + 1;
        }
        count++;
    }
    return -1
}
// 콜라츠 추측
// n	result
// 6	8
// 16	4
// 626331	-1