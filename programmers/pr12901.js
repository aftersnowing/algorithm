function solution(a, b) {
    var month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var week = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
    var days = 0;
    if (a > 1) {
        days = month.slice(0, a - 1).reduce((acc, cur) => acc + cur);
    }
    return week[((days + b) % 7)];
}
// 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요?
// a	b	result
// 5	24	TUE