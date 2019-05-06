function solution(arrangement) {
    let newStr = arrangement.replace(/\(\)/g, '1')
    let result = 0;
    while (newStr.indexOf('(') !== -1) {
        newStr = newStr.replace(/\(1*\)/g, (match) => {
            if (match.indexOf('1') !== -1) { result += match.length - 1 }
            return match.slice(1, match.length - 1);
        });
    }
    return result
}
// 쇠막대기
// arrangement	          return
// ()(((()())(())()))(())	17