function solution(n, words) {
  let stack = [words.shift()];
  let targetIndex = null;
  if (stack[0].length === 1) return [1, 1];
  words.some((val, i) => {
    if (val.length === 1) {
      targetIndex = i;
      return true;
    }
    if (stack.indexOf(val) !== -1) {
      targetIndex = i;
      return true;
    }
    if (stack.slice(-1)[0].slice(-1) !== val.slice(0, 1)) {
      targetIndex = i;
      return true;
    }
    stack.push(val);
  });

  if (targetIndex === null) {
    return [0, 0];
  } else {
    targetIndex += 2;
    if (targetIndex % n === 0) {
      return [n, Math.floor(targetIndex / n)];
    } else {
      return [targetIndex % n, Math.floor(targetIndex / n) + 1];
    }
  }
}

// 영어 끝말잇기

// 입출력 예
// n	words	                                                       result
// 3	[tank, kick, know, wheel, land, dream, mother, robot, tank]	  [3,3]
// 2	[hello, one, even, never, now, world, draw]	                  [1,3]

// 문제 설명
// 1. 1번부터 번호 순서대로 한 사람씩 차례대로 단어를 말합니다.
// 2. 마지막 사람이 단어를 말한 다음에는 다시 1번부터 시작합니다.
// 3. 앞사람이 말한 단어의 마지막 문자로 시작하는 단어를 말해야 합니다.
// 4. 이전에 등장했던 단어는 사용할 수 없습니다.
// 5. 한 글자인 단어는 인정되지 않습니다.

// stack 배열을 만들어서 some 메소드로 주어진 words배열을 순회하면서 규칙에 맞는 단어이면 stack에 넣어주고 아니면
// 해당 인덱스를 반환하면서 순회를 종료하도록 했다.
// 찾은 인덱스는 나누어 떨어질때와 나누어 나머지가 남을때 2가지 경우에서 원하는 사람번호와 몇번째인지를 찾을 수 있도록 했다.
