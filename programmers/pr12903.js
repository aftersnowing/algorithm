function solution(s) {
    var center = Math.ceil(s.length / 2) - 1;
    return s.length % 2 === 0 ? s.substring(center, center + 2) : s.substring(center, center + 1)
}
// 가운데 글자 가져오기
// s	return
// abcde	c
// qwer	we