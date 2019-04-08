Input: N = 12

Output: 10 // 0, 1, 2, 3, 5, 8 중 짝수인 2 + 8 = 10.

// function fibonacci(n){
//     if(n <= 2) return 1;

//     return fibonacci(n - 1) + fibonacci(n - 2)
// }

// console.log(fibonacci(5))

function picker(k){
    function fibonacci(n){
        if(n <= 2) return 1;
    
        return fibonacci(n - 1) + fibonacci(n - 2)
    }
    var  result = 0;
    for(let i = 1; k > fibonacci(i); i++){
        if (fibonacci(i) % 2 === 0) {
            result += fibonacci(i)
        }
    }
    return result
}
console.log(picker(12))

function fibonacci (n){
    var a = 1, b = 0, temp;

    while(n >= 0){
        temp = a;
        a = a + b;
        b = temp
        i--
    }
    return b
}