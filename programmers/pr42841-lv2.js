function solution(baseball) {
  let numbers = [];
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      if (i === j) continue;
      for (let k = 1; k < 10; k++) {
        if (i === k || j === k) continue;
        numbers.push(i.toString() + j.toString() + k.toString());
      }
    }
  }

  let givenNums = baseball.map(val => {
    return val[0] + "";
  });

  givenNums.forEach((val, i) => {
    numbers = numbers.filter(el => {
      let strike = 0;
      let ball = 0;
      for (let j = 0; j < 3; j++) {
        if (el[j] === val[j]) strike++;
        if (el[j] !== val[j] && el.indexOf(val[j]) !== -1) ball++;
      }
      return strike === baseball[i][1] && ball === baseball[i][2];
    });
  });
  return numbers.length;
}

//숫자 야구

// baseball	                                                 return
// [[123, 1, 1], [356, 1, 0], [327, 2, 0], [489, 0, 1]]       	2

// A : 123
// B : 1스트라이크 1볼.
// A : 356
// B : 1스트라이크 0볼.
// A : 327
// B : 2스트라이크 0볼.
// A : 489
// B : 0스트라이크 1볼.

// 어떤 특정한 메소드를 써서 깔끔하고 짧게 풀 수 있는 문제는 아니었다. 먼저 반복문을 이용해 각 자리 숫자가 중복되지 않는 숫자의 배열을 만들었다.
// 그리고나서 주어진 조건에 해당하는 숫자를 filter 메소드를 이용해 filter해서 가장 마지막에 남은 숫자를 반환했다.
