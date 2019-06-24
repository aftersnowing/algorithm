function solution(numbers) {
  let numList = [];
  numbers = numbers.split("");
  makeUniqueNum(numbers, "");

  function makeUniqueNum(numbers, combi) {
    for (let i = 0; i < numbers.length; i++) {
      let t = numbers.slice();
      let acc = combi;
      acc += t.splice(i, 1);
      numList.push(acc);
      if (numbers.length !== 0) {
        makeUniqueNum(t, acc);
      }
    }
  }

  var removeSameNum = new Set(numList.map(Number));
  numList = [...removeSameNum];

  numList = numList.filter(val => {
    if (val < 2) return false;
    if (val === 2) return true;
    if (val === 3) return true;
    for (let i = 2; i <= Math.sqrt(val); i++) {
      if (val % i === 0) return false;
    }
    return true;
  });
  return numList.length;
}

// - 소수찾기

// - 문제 설명
// 한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.
// 각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.

// - 제한사항
// numbers는 길이 1 이상 7 이하인 문자열입니다.
// numbers는 0~9까지 숫자만으로 이루어져 있습니다.
// 013은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.

// - 입출력 예
// numbers	return
// 17      	3
// 011     	2

// 주어진 숫자의 순열을 구하기 위해 처음에는 중첩된 for문을 사용하려고 생각했다. 하지만 자릿수가 변할때마다 for문의 중첩 횟수를 바꿔줘야해서 원하는 값을
// 구하기가 어려웠다. 그래서 recursion 방식으로 만들 수 있는 모든 수를 만들고 set자료구조를 이용해서 중복되는 숫자를 제거했다. 그 이후로는 구한 숫자가
// 소수인지 아닌지를 판별해서 그 숫자를 구했다.
