function kangaroo(x1, v1, x2, v2) {
  let speed = null;
  let fast = null;
  let slow;
  if (v1 > v2) {
    speed = v1 - v2;
    fast = x1;
    slow = x2;
  } else {
    speed = v2 - v1;
    fast = x2;
    slow = x1;
  }
  while (fast < slow) {
    fast += speed;
  }
  return fast === slow ? "YES" : "NO";
}

// Kangaroo

// Sample Input
// 0 3 4 2

// Sample Output
// YES

// 주어진 위치에서 주어진 속도로 출발하는 캥거루 2마리가 있다. 빠른 녀석이 뒤에 위치해서 앞에 위치한 느린 녀석을 따라잡는데
// 추월할 때 한번은 같은 위치에 겁치면 YES, 겹치지지 않고 추월하면 NO를 반환하면 된다.
// 주어진 속도를 비교하여 빠른 녀석과 느린 녀석을 구분했고 느린녀석은 멈추어 있고 빠른 녀석은 느린녀석의 속도를 뺀
// 만큼의 속도로 움직인다고 생각했다(상대속도의 개념?).
