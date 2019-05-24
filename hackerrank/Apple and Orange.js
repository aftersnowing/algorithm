function countApplesAndOranges(s, t, a, b, apples, oranges) {
    apples = apples.map(val => val + a).filter(val => val >= s && val <= t);
    oranges = oranges.map(val => val + b).filter(val => val <= t && val >= s);
    console.log(apples.length);
    console.log(oranges.length);
}
// Apple and Orange

// Sample Input 0
// 7 11
// 5 15
// 3 2
//     - 2 2 1
// 5 - 6
// Sample Output 0
// 1
// 1
// 간단한 수학문제의 느낌이다. 처음에 filter 조건을 사과나무의 경우 왼쪽 좌표보다만 크면된다고 해서 오른쪽으로 벗어나는 걸 고려안했고
// 오렌지 나무의 경우 오른쪽 좌표보다만 작으면 된다고 해서 왼쪽으로 벗어나는 걸 고려안해서 한동안 헤맸다 ㅎㅎ;;