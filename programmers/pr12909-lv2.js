function solution(s) {
    const stack = [];
    for (var char of s) {
        if (char === '(') {
            stack.push('(');
        } else if (!stack.pop()) {
            return false
        }
    }
    return !stack.length
}
// 올바른 괄호
// 입출력 예
// s	answer
// ()()	true
// (())()	true
// )()(	false
// (()(	false
