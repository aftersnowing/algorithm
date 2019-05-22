function solution(name) {
    let arr = name.split('');
    let charNum = 0;
    charNum = arr.reduce((acc, cur) => {
        charNum = cur.charCodeAt() - 65;
        if (charNum > 13) return acc + 91 - cur.charCodeAt();
        return acc + charNum
    }, 0);

    let indexArr = null;
    let count = 0;
    let pointer = 0;
    while (arr.filter(val => val !== 'A').length) {
        indexArr = arr.reduce((acc, cur, i) => {
            let forWard = null;
            let backWard = null;
            if (cur !== 'A') {
                pointer < i ? forWard = i - pointer : forWard = arr.length - pointer + i
                pointer > i ? backWard = pointer - i : backWard = pointer + arr.length - i
                forWard > backWard ? acc.push([i, backWard]) : acc.push([i, forWard])
            }
            return acc
        }, []);
        indexArr.sort((a, b) => a[1] - b[1]);
        pointer = indexArr[0][0];
        count += indexArr[0][1];
        arr[pointer] = 'A';
    }
    return charNum + count
}
// 조이스틱
// 입출력 예
// name	return
// JEROEN	56
// JAN	    23
// 먼저 위아래를 움직이는 횟수와 좌우를 움직이는 횟수를 나누어 코딩했다. 
// 위아래로 움직여 알파벳을 바꾸는 횟수의 최솟값은 ASCII code를 이용해 간단히 구할 수 있었다.
// 문제는 좌우를 움직이는 횟수의 최솟값이었는데 처음에는 오른쪽으로 1회 왼쪽으로 1회 순회한 횟수중 작은 것을 반환했으나
// 테스트케이스에서 통과하지 못하는 것이 있었다. 다시 한번 생각해보니 처음 시작한 지점에서 매번 좌우 방향으로 가까운 곳으로 이동해야
// 전체 좌우를 움직인 횟수가 최소로 나올 수 있었다.