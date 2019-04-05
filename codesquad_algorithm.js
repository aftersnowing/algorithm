














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



function bin2dec(bin) {
    var result = bin[0];
    for(var i = 1; i < bin.length; i++){
        if(bin[i]){
            result += Math.pow(2, i)
        }
    }
    return result;
}
console.log(bin2dec([0, 1, 1, 1])); // 14
console.log(bin2dec([1, 1, 1, 1, 0, 1, 0 ,1])) // 175
//9. 진법 변환기 2진수를 10진수로 변환 구현


function decAdder(A, B) {
    function bin2dec(bin) {
        var result = bin[0];
        for(var i = 1; i < bin.length; i++){
            if(bin[i]){
                result += Math.pow(2, i)
            }
        }
        return result;
    }

    function dec2bin(decimal) {
        var answer = [];
        while(decimal > 0){
            answer.push(decimal % 2);
            decimal = Math.floor(decimal / 2);
        }
        return answer;
    }

    var byteA = dec2bin(A);
    var byteB = dec2bin(B);
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
    if(byteA.length > byteB.length){
        byteA.forEach((el,i) =>{byteB[i] !== undefined ? 
            fulladder(el, byteB[i], carry) : 
            fulladder(el, 0, carry)
        })
    }else {
        byteB.forEach((el,i) =>{byteA[i] !== undefined ? 
            fulladder(el, byteA[i], carry) : 
            fulladder(el, 0, carry)
        })
    } 
    result.push(carry);
    return bin2dec(result);
}
console.log(decAdder(30,50));
console.log(decAdder(54,66));
// 10. 이진 덧셈기에 입력과 출력에 연결해서 10진수 덧셈 구현



function reverseArray(a) {
    return a.reverse();
}
console.log([1, 4, 3, 2]) // [2, 3, 4, 1]
//11. 알고리즘 1-2 주어진 배열을 역배열로 출력

