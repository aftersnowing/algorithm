function marcsCakewalk(calorie) {
    calorie.sort((a, b) => b - a);
    return calorie.reduce((acc, cur, i) => {
        return acc + Math.pow(2, i) * cur
    }, 0);
}
// Marc's Cakewalk

// Sample Input 0
// 3
// 1 3 2

// Sample Output 0
// 11

//탐욕법! sort를 아주 요긴하게 쓰고 있다. 내림차순으로 정렬해서 redcue로 해당 2의 인덱스 승을 곱해줬다.