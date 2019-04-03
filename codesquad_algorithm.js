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



function solution(a, b) {
    var result = 0;
    if(a > b){
        for(let i = b; i <= a; i++){
            result += i
        }
    }else if(a < b){
        for(let i = a; i <= b; i++){
            result += i
        }
    }else{
        return a
    }
    return result
}
// 4. 두 정수 사이의 합



function halfadder(bitA, bitB) {
    var carry = 0;
    var sum = 0;
    var answer = [];
    if(bitA + bitB === 2){
        carry = 1;
        sum = 0;
    }else if(bitA + bitB === 1){
        carry = 0;
        sum = 1;
    }else if(bitA + bitB){
        carry = 0;
        sum = 0;
    }
    answer[0] = carry;
    answer[1] = sum;
    return answer
}
console.log(halfadder(1,1)) // [1,0]
console.log(halfadder(0,1)) // [0,1]
console.log(halfadder(1,0)) // [0,1]
console.log(halfadder(0,0)) // [0,0]
// 5. 이진덧셈기 반가산기 구현



function fulladder(bitA, bitB, carrybit) {
    var carry = 0;
    var sum = 0;
    var answer = [];
    if(bitA + bitB + carrybit === 3){
        carry = 1;
        sum = 1;
    }else if(bitA + bitB + carrybit === 2){
        carry = 1;
        sum = 0;
    }else if(bitA + bitB + carrybit === 1){
        carry = 0;
        sum = 1;
    }else if(bitA + bitB + carrybit === 0){
        carry = 0;
        sum = 0;
    }
    answer[0] = carry;
    answer[1] = sum;
    return answer
}
console.log(fulladder(1,1,1)); // [1, 1]
console.log(fulladder(0,1,1)); // [1, 0]
console.log(fulladder(1,0,1)); // [1, 0]
console.log(fulladder(1,1,0)); // [1, 0]
console.log(fulladder(0,0,1)); // [0, 1]
console.log(fulladder(0,1,0)); // [0, 1]
console.log(fulladder(1,0,0)); // [0, 1]
console.log(fulladder(0,0,0)); // [0, 0]
// 6. 이진덧셈기 전가산기 구현



function byteadder(byteA, byteB) {
    function fulladder(bitA, bitB, carrybit) {
        var sum = 0;
        if(bitA + bitB + carrybit === 3){
            carry = 1;
            sum = 1;
        }else if(bitA + bitB + carrybit === 2){
            carry = 1;
            sum = 0;
        }else if(bitA + bitB + carrybit === 1){
            carry = 0;
            sum = 1;
        }else if(bitA + bitB + carrybit === 0){
            carry = 0;
            sum = 0;
        }
        result.push(sum);
    }
    var result = [];
    var carry = 0;

    byteA.forEach((el,i) =>{
        fulladder(el, byteB[i], carry)
    })
    result.push(carry);
    return result;
}

console.log(byteadder([ 1, 1, 0, 1, 1, 0, 1, 0 ], [ 1, 0, 1, 1, 0, 0, 1, 1 ])); 
// [ 0, 0, 0, 1, 0, 1, 0, 0, 1 ]
console.log(byteadder([ 1, 1, 0, 0, 1, 0, 1, 0 ], [ 1, 1, 0, 1, 1, 0, 0, 1 ])); 
// [ 0, 1, 1, 1, 0, 1, 1, 1, 0 ]
// 7. 이진덧셈기 8비트 덧셈기를 구현



function dec2bin(decimal) {
    var answer = [];
    while(decimal > 0){
        answer.push(decimal % 2);
        decimal = Math.floor(decimal / 2);
    }
    return answer;
}
console.log(dec2bin(10)); // [0, 1, 0, 1]
console.log(dec2bin(173)); // [1,0,1,1,0,1,0,1]
//8. 진법 변환기 10진수를 2진수 변환 구현