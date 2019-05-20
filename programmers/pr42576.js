function solution(participant, completion) {
    participant.sort();
    completion.sort();
    for(let i = 0; i < participant.length; i++){
        if(participant[i] !== completion[i])
            return participant[i]
    }
}
//그냥 내 머리속에 떠오른 풀이법

function solution(participant, completion) {
    const hash = participant.reduce((acc, cur) => {
        acc[cur] === undefined ? acc[cur] = 1 : acc[cur] ++
        return acc
    }, {});
    completion.forEach(val => {
        hash[val]--;
        hash[val] === 0 ? delete(hash[val]) : null;
    });
    return Object.keys(hash)[0]
}
//이 문제는 해시문제이기 때문에 해시를 사용해서 풀어봤다


// 완주하지 못한 선수
// participant	            completion	        return
// [leo, kiki, eden]    	[eden, kiki]	     leo
// [marina, josipa, nikola, vinko, filipa]	[josipa, filipa, marina, nikola]	vinko
// [mislav, stanko, mislav, ana]	[stanko, ana, mislav]	mislav

