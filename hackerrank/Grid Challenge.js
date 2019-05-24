function gridChallenge(grid) {
    grid = grid.map(val => val.split('').sort().join(''));
    for (let i = 0; i < grid[0].length; i++){
        for (let j = 0; j < grid.length - 1; j++) {
            if (grid[j][i] > grid[j + 1][i]) return'NO'
        }
    }
    return 'YES'
}
// Grid Challenge

// Sample Input
// 1
// 5
// ebacd
// fghij
// olmkn
// trpqs
// xywuv

// Sample Output
// YES

// 각 element string에 대하여 sort를 해서 오름차순으로 알파벳 배열을 시킨 후 
// 각 알파벳의 동일 위치의 알파벳이 또 오름차순으로 배열되어 있는지 확인했다.