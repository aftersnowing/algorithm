function solution(n, m) {
    let multiply = n * m;
    let r = null;
    let GCD = (function GCD(n, m) {
        if(n > m) {
            r = n % m;
            return r === 0 ? m : GCD(m, r)
        }else {
            r = m % n;
            return r === 0 ? n : GCD(n, r)
        }
    })(n,m);
    return [GCD, multiply / GCD]
}
// 최대공약수와 최소공배수
// 입출력 예
// n	m	return
// 3	12	[3, 12]
// 2	5	[1, 10]