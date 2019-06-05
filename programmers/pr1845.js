function solution(nums) {
  let store = [];
  nums.forEach(val => {
    if (store.indexOf(val) === -1) store.push(val);
  });
  if (store.length >= nums.length / 2) return nums.length / 2;
  return store.length;
}

// 폰케몬

// 입출력 예

// nums       	result
// [3,1,2,3]    	2
// [3,3,3,2,2,4]	3
// [3,3,3,2,2,2]	2

// 배열에 숫자가 주어지고 배열의 길이의 1/2만큼 숫자를 뽑을때 가장 많은 서로 다른 숫자의 갯수를 리턴하는 문제이다.
// forEach로 빈 배열에 중복되지 않는 숫자를 넣어주고 그 배열의 길이가 본래 배열의 길이의 1/2보다 길면 본래 배열의 길이 1/2을 리턴
// 본래 배열의 길이보다 짧으면 중복되지 않는 숫자의 배열 길이 그대로 리턴을 했다.
