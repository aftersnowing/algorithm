function solution(brown, red) {
    let divider = 1;
    let quotient  = null;
    let circumference = null;
    while(divider <= red) {
        quotient  = red / divider;
        circumference = (divider + quotient + 2) * 2;
        if(circumference === brown) return[quotient + 2, divider + 2];
        divider++;
    }
}
// 카펫
// 입출력 예
// brown	red	return
// 10	2	[4, 3]
// 8	1	[3, 3]
// 24	24	[8, 6]

// brown에 둘러쌓여 있는 red의 가로 세로가 될 수 있는 모든 수(1부터 red까지 나눈 수)를 가지고 brown과 매칭되는 수를 찾아서 결과로 리턴