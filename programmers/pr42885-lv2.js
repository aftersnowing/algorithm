function solution(people, limit) {
    people.sort((a, b) => b - a);
    let count = 0;
    while(people.length) {
        if(people[0] + people[people.length - 1] <= limit) {
            people.shift();
            people.pop();
        }else {
            people.shift();
        }
        count++;
    }
    return count
}
// 구명보트
// 입출력 예
// people	          limit 	return
// [70, 50, 80, 50]	100	      3
// [70, 80, 50]	    100	      3
// 먼저 내림차순으로 sort를 해주고 가장 무거운 사람과 가장 가벼운 사람의 무게 합이 limit를 넘지 않으면 앞뒤에서 1명씩 빼고
// limit을 넘는다면 무거운 사람만 뺐다.