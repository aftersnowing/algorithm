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
// 두 정수 사이의 합
// a	b	return
// 3	5	12
// 3	3	3
// 5	3	12