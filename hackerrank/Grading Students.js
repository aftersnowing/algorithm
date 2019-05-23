function gradingStudents(grades) {
    var newArr = [];
    for (var el of grades) {
        if (el > 37 && el < 100) {
            var strNum = el.toString();
            if (Number(strNum[1]) > 2 && Number(strNum[1]) < 5) {
                var newStrNum = strNum.slice(0, 1) + '5';
                newArr.push(Number(newStrNum));
            } else if (Number(strNum[1]) > 7 && Number(strNum[1]) <= 9) {
                var newStrNum = strNum.slice(0, 1) + '0';
                newArr.push(Number(newStrNum) + 10);
            } else {
                newArr.push(el);
            }
        } else {
            newArr.push(el);
        }
    }
    return newArr;
}
// Sample Input 0

// 4
// 73
// 67
// 38
// 33
// Sample Output 0

// 75
// 67
// 40
// 33
//시험 점수를 반올림해주는 문제인데 38점미만은 해당되지 않고 현재점수와 비교했을때 5배수 중에 바로 다음 큰수로 반올림하되 3점이상 차이가 나면 안된다.
//그래서 그냥 if문으로 하나씩 따져서 풀었다. 
