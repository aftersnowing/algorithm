console.log('Hello World!');
// 1. Hello World!를 출력하세요aa


var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a+b);
// 2. 표준입력을 1 2 를 받아서 3을 출력


var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = Number(input[0]);
var b = Number(input[1]);
console.log(a-b);
// 3. 표준입력 1 2를 받아서 1-2 출력