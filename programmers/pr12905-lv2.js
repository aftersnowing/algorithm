function solution(board){
    let max = 0;
    let lengthY = board.length;
    let lengthX = board[0].length;
    if(lengthY < 2 || lengthX < 2) {
        for(let y = 0; y < lengthY; y++) {
            for(let x = 0; x < lengthX; x++){
                if(board[y][x] === 1) max = 1
            }
        }
    }
    for(let y = 1; y < lengthY; y++) {
        for(let x = 1; x < lengthX; x++) {
            if(board[y][x] === 1){
                board[y][x] = Math.min(board[y][x-1], board[y-1][x-1], board[y-1][x]) + 1;
                if(max < board[y][x]) max = board[y][x];
            }
        }
    }
    return Math.pow(max, 2);
}
// 가장 큰 정사각형 찾기
// 입출력 예
// board	                                  answer
// [[0,1,1,1],[1,1,1,1],[1,1,1,1],[0,0,1,0]]	9
// [[0,0,1,1],[1,1,1,1]]	                    4

// thouths
// 이것이 DP인가...! 처음에 사고방식을 가장 큰 정사각형의 범위를 설정해서 for문으로 순회하며 그안에 0이 포함되어 있는지 아닌지를 판단했다. 
// 그렇게 내가 설정한 정사각형의 변의 길이를 1씩 줄여가며 0이 포함되어 있지 않은 범위를 정사각형의 넓이로 반환하려고 했는데 
// 일단 코드가 너무 복잡해졌고 예외적인 경우가 너무 많이 생겨나서 하나하나 따져주기가 힘들어졌다. 
// 결국... 구글링ㅎ 사람들의 블로그를 보니 이것은 DP문제라고 하더라... 
// DP는 큰 단위의 문제를 작은 단위로 나눠서 그 작은 문제를 해결하면 큰 문제가 해결되는 방식의 프로그래밍이라고 한다. 
// 위의 알고리즘도 좌측과 상단과 좌측상단의 값을 따져주는 식을 for문으로 순회하면서 모든 범위를 작은 단위의 식이 따질 수 있게끔 한다.
// 좀 더 연습해봐야겠다!