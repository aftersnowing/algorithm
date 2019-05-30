function solution(land) {
  let dp = [land[0]];
  for (let i = 1; i < land.length; i++) {
    dp[i] = [];
    for (let j = 0; j < 4; j++) {
      let arr = [];
      for (let k = 0; k < 4; k++) {
        if (j !== k) arr.push(dp[i - 1][k]);
      }
      dp[i].push(Math.max(...arr) + land[i][j]);
    }
  }
  return Math.max(...dp[land.length - 1]);
}

console.log(solution([[1, 2, 3, 5], [5, 6, 7, 8], [4, 3, 2, 1]]));

//입출력 예
// land	                            answer
// [[1,2,3,5],[5,6,7,8],[4,3,2,1]]  	16

// 처음으로 dp를 이용해 알고리즘을 풀어봤다. 이전 단계에 연산한 값을 저장해서 다음 단계 연산을 할때는 그 값을 불러오는 방식이다.
// 이 문제에서는 land의 첫 배열을 dp 배열에 넣어놓고 land의 두번째 배열의 각 요소가 dp배열의 첫번째 배열의 자기 자신의 인덱스를 제외한
// 값과 합했을 때 가장 큰 값을 다시 dp배열의 두번째 배열에 저장하도록 했다.
