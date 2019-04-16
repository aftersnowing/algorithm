function hourglassSum(arr) {
    const eachSumArr = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            console.log(arr[i][j])
            var eachSum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] +
                arr[i + 1][j + 1] +
                arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]
            result.push(eachSum);
        }
    }
    return Math.max.apply(null, eachSumArr)
}
//2차원 배열에서 모래시계형태의 각각의 합을 구해서 가장 큰 수를 반환
// input
// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 2 4 4 0
// 0 0 0 2 0 0
// 0 0 1 2 4 0

// max hourGlass
// 2 4 4
//   2
// 1 2 4

// output
// 19