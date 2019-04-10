function solution(array, commands) {
    return commands.map((el) => array.slice(el[0] - 1, el[1]).sort((a, b) => a - b)[el[2] - 1])
}
// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하기.