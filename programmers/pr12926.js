function solution(s, n) {
    let result = [];
    for (let i = 0; i < s.length; i++) {
        let char = s.charCodeAt(i)
        let movedChar = char + n
        if (char > 64 && char < 91) {
            movedChar <= 90 ? movedChar = movedChar : movedChar -= 26
        } else if (char > 96 && char < 123) {
            movedChar <= 122 ? movedChar = movedChar : movedChar -= 26
        } else {
            result.push(char);
            continue;
        }
        result.push(movedChar);
    }
    return String.fromCharCode(...result)
}
// 시저 암호
// s	n	result
// AB	1	BC
// z	1	a
// a B z	4	e F d