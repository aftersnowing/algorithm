var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString()
var N = parseInt(input);
var five = 0;
var three = 0;
function packSugar(n) {
    if (n >= 5) {
        five += Math.floor(n / 5);
        n -= 5 * Math.floor(n / 5);
        return packSugar(n)
    } else if (n >= 3) {
        three += Math.floor(n / 3);
        n -= 3 * Math.floor(n / 3);
        return packSugar(n);
    } else if (n === 0) {
        return five + three;
    } else if (five > 0) {
        five -= 1;
        n += 5;
        three += Math.floor(n / 3);
        n -= 3 * Math.floor(n / 3);
        return packSugar(n);
    } else {
        return -1;
    }
}
console.log(packSugar(N));

//설탕문제 Nkg이 주어졌을때 5kg 3kg으로 나눠 담되, 5kg을 우선해서 봉지수를 최소화
