function solution(arr1, arr2) {
  let result = [];
  let container = [];
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    container = [];
    for (let j = 0; j < arr2[0].length; j++) {
      sum = 0;
      for (let k = 0; k < arr2.length; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      container.push(sum);
    }
    result.push(container);
  }
  return result;
}

//행렬의 곱셈

//입출력 예
//            arr1                            arr2	                                   return
// [[1, 4], [3, 2], [4, 1]]          /	[[3, 3], [3, 3]]                  /	[[15, 15], [15, 15], [15, 15]]
// [[2, 3, 2], [4, 2, 4], [3, 1, 4]] /	[[5, 4, 3], [2, 4, 1], [3, 1, 1]] /	[[22, 22, 11], [36, 28, 18], [29, 20, 14]]

// 행렬의 곱셈을 대학에서 교양수업으로 배웠었는데 잘 기억이 나지 않아서 곱셈이 어떻게 이루어지는지 알아보는데 시간이 오래걸렸다.
// 앞의 행렬의 행의 갯수(열의 길이)와 뒤의 행렬의 열의 갯수(행의 길이)가 같아야하고 앞의 행렬의 행의 길이와 뒤의 행렬의 열의 길이는 달라도 된다.
// 반복문을 쓸때 서로 다른 길이의 변수가 3개가 필요해 3중 for문을 사용했다.
