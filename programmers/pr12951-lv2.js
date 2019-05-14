function solution(s) {
    return s.toLowerCase().replace(/^[a-z]|(?<=\s)[a-z]/g, match => match.toUpperCase());
}
// JadenCase 문자열 만들기
// 입출력 예
// s 	                       return
// 3people unFollowed me	3people Unfollowed Me
// for the last week	    For The Last Week
//split을 해서 map으로 바꿔준뒤  다시 join했는데 런타임에러가 나서 정규표현식으로 풀었다.