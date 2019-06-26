function orderWeight(string) {
  let arr = string.split(" ");
  let result = arr
    .sort((a, b) => {
      let standard = calculator(a) - calculator(b);
      if (standard === 0) {
        return a.localeCompare(b);
      }
      return standard;
    })
    .join(" ");

  function calculator(stringNum) {
    let arr = stringNum.split("").map(Number);
    return arr.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
  }

  return result;
}

// Example:
// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: "100 180 90 56 65 74 68 86 99"

// When two numbers have the same "weight", let us class them as if they were strings and not
// numbers: 100 is before 180 because its "weight" (1) is less than the one of 180 (9) and 180 is before 90 since,
// having the same "weight" (9), it comes before as a string.

// All numbers in the list are positive numbers and the list can be empty.

// 나의 사고: white-space로 구분되어진 숫자의 집합이 string이 인자로 주어진다. 그래서 나는 이것을 split한 다음에 sort를 하자라고 크게 생각했다.
// sort에서 각 element의 자릿수 합을 비교해서 작은 순서대로 정렬되어야 하므로 따로 함수를 만들어서 element의 자릿수의 합을 계산하여 sort할 수 있도록 했다. 이때 문제는 각자릿수 합이 같은 element였다.
// 합이 같을때는 string의 순서대로 비교를 해야하는데 즉 10000001이 2보다 앞에 와야했다. 어떻게 해야될지 좀 고민을 하다가 localeCompare()메소드가 생각나서
// 이것을 사용했다. 이는 참조된 string값을 비교해주는 것으로 string과 string끼리 비교할때 어떤 string이 앞에 올지 정해주는 메소드이다.
