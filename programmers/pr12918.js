function solution(s) {
    if (s.length === s.match(/\d/g).length && (s.length === 4 || s.length === 6)) return true
    return false
}
// 문자열 다루기 기본
// s	    return
// a234	false
// 1234	true