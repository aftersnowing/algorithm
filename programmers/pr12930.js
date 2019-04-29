function solution(s) {
    return s.toUpperCase().replace(/[A-Z]{2}/g, (match) => match[0].toUpperCase() + match[1].toLowerCase())
}
// 이상한 문자 만들기
//         s	            return
// try hello world	/  TrY HeLlO WoRlD
