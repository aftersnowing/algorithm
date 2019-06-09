function solution(nums) {
  let numbers = [];
  nums.forEach((el1, i, arr1) => {
    arr1.slice(i + 1).forEach((el2, j, arr2) => {
      arr2.slice(j + 1).forEach(el3 => {
        let tempSum = el1 + el2 + el3;
        numbers.push(tempSum);
      });
    });
  });

  let result = numbers.filter(val => {
    let rootNum = Math.floor(Math.sqrt(val));
    let limit = 2;
    while (limit <= rootNum) {
      if (val % limit === 0) return false;
      limit++;
    }
    return true;
  });
  return result.length;
}

// 소수 만들기

// 입출력 예
// nums	        result
// [1,2,3,4]    	1
// [1,2,7,6,4]  	4

// 문제 설명
// 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다.
// 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때
// 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.
