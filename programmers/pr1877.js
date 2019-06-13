function solution(arr) {
  let result = true;
  arr.sort((a, b) => a - b);
  arr.forEach((val, i) => {
    if (arr[i + 1] !== undefined) {
      if (arr[i + 1] - val !== 1) result = false;
    }
  });
  return result;
}

// 순열검사

// 문제 설명
// 길이가 n인 배열에 1부터 n까지 숫자가 중복 없이 한 번씩 들어 있는지를 확인하려고 합니다.
// 1부터 n까지 숫자가 중복 없이 한 번씩 들어 있는 경우 true를, 아닌 경우 false를 반환하도록 함수 solution을 완성해주세요.

// 입출력 예
// arr	result
// [4, 1, 3, 2]	true
// [4, 1, 3]

// sort로 정렬을 해준다음 forEach로 각각 1차이 나는 수인지 확인했다.
