function minimumAbsoluteDifference(arr) {
    arr.sort((a, b) => b - a);
    return arr.reduce((acc, cur, i) => {
        if (i < arr.length - 1) {
            let difference = Math.abs(cur - arr[i + 1]);
            return acc < difference ? acc : difference
        }
        return acc
    },Infinity);
}
// Minimum Absolute Difference in an Array

// Sample Input 
// 3
// 3 -7 0

// Sample Output 0
// 3
//Greedy문제이다. 비교적 슆게 풀었다. sort를 하여 내림차순으로 정렬한 뒤 앞과 뒤의 차를 구한뒤
//그 차의 절대값이 가장 작은 수를 반환 하도록 했다.