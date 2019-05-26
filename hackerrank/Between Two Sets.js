function getTotalX(a, b) {
  let minNum = Math.max(...a);
  let maxNum = Math.min(...b);
  let count = 0;
  for (let i = minNum; i <= maxNum; i++) {
    let condition1 = a.every(val => i % val === 0);
    let condition2 = b.every(val => val % i === 0);
    if (condition1 && condition2) count++;
  }
  return count;
}
// Between Two Sets

// Sample Input
// 2 3
// 2 4
// 16 32 96

// Sample Output
// 3

// a에서 가장 큰 수, b에서 가장 작은 수를 뽑아 구하려는 수의 범위를 for문의 반복 횟수에 넣었다.
// 그리고 every 메소드를 사용해서 con1과 con2를 만족하는 i를 카운트했다.
