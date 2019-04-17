function solution(answers) {
    var answer = [];
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    var a1c = answers.filter((el, index) => a1[index % a1.length] === el).length;
    var a2c = answers.filter((el, index) => a2[index % a2.length] === el).length;
    var a3c = answers.filter((el, index) => a3[index % a3.length] === el).length;

    var maxNum = Math.max(a1c, a2c, a3c);

    if(maxNum === a1c){
        answer.push(1);
    }
    if(maxNum === a2c){
        answer.push(2);
    }   
    if (maxNum === a3c){
        answer.push(3);
    }
    return answer;
}
// 모의고사
// answers	   return
// [1,2,3,4,5]	[1]
// [1,3,2,4,2]	[1,2,3]
