function solution(p, s) {
    const days = p.map((val, i) => Math.ceil((100 - val) / s[i]));
    const result = [];
    let count = 1;
    days.reduce((acc, cur) => {
        if (acc >= cur) {
            count++;
            return acc
        } else {
            result.push(count);
            count = 1;
            return cur
        }
    });
    result.push(count);
    return result
}
// 기능개발
// 입출력 예
// progresses	speeds	return
// [93,30,55]	[1,30,5]	[2,1]