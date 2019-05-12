function solution(c) {
    c = c.sort((a, b) => b - a);
    for(var i = 0; i < c.length; i++){
        if(c[i] < i + 1) return i;
    }
    return c.length
}
// H-Index
// 어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h가 이 과학자의 H-Index입니다.

// 입출력 예
// citations	return
// [3, 0, 6, 1, 5]	3

// 알고리즘
// c[i]번 이상 인용된 논문의 수가 c[i]편을 넘어설 때 H인덱스 보다 1 큰 것이므로 i + 1에서 -1 한 것을 리턴  