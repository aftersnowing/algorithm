var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString();
var N = parseInt(input);
(function starTable(n){
    for(var i = 1; i <= n; i++){
        var space = '';
        var star = '';
        for(var j = 1; j <= n-i; j++){
            space += ' ';
        }
        for(var k = 1; k <= i; k++){
            star += '*';
        }
        console.log(space + star);
    }
})(N)
// 예제 입력 1 
// 5
// 예제 출력 1 
//     *
//    **
//   ***
//  ****
// *****