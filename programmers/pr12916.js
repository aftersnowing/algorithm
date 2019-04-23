function solution(s){
    var y = s.toLowerCase().split('').filter((el)=> el === 'y').length;
    var p = s.toLowerCase().split('').filter((el)=> el === 'p').length;
    return y === p ? true : false
}
// 문자열 내 p와 y의 개수
// s	       answer
// pPoooyY  	true
// Pyy	        false
