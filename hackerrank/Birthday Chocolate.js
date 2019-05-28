function birthday(s, d, m) {
  let count = 0;
  for (let i = 0; i + m <= s.length; i++) {
    let sum = 0;
    for (let j = i; j < i + m; j++) {
      sum += s[j];
    }
    if (sum === d) count++;
  }
  return count
}
console.log(birthday([1, 2, 1, 3, 2], 3, 2))
// Birthday Chocolate

// Sample Input
// s = 1 2 1 3 2
// d = 3  m = 2

// Sample Output
// 2

// 이중 for문으로 쉽게 풀렸다. 연속된 초콜릿이여서 주어진 연속된 초콜릿의 수 만큼을 한칸씩 이동해가면서 합을 구했다.
// 테스트 케이스로 좀 더 긴 배열과 연속되지 않은 초콜릿을 고려해주는 문제였으면 더 어려웠을 것 같다.
