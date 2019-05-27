function breakingRecords(scores) {
  let result = [0, 0];
  let highest = scores[0];
  let lowest = scores[0];
  scores.forEach(val => {
    if (val > highest) {
      highest = val;
      result[0]++;
    }
    if (val < lowest) {
      lowest = val;
      result[1]++;
    }
  });
  return result;
}
// Breaking the Records

// Sample Input
// 9
// 10 5 20 20 4 5 2 25 1

// Sample Output
// 2 4

// 배열의 첫번째값을 하이스트 로우스트에 할당한 후 두번째 값부터 비교를 시작해서 하이스트와 로우스트 나오는 횟수를 카운트했다.
