function solution(participant, completion) {
    participant.sort();
    completion.sort();
    for(let i = 0; i < participant.length; i++){
        if(participant[i] !== completion[i])
            return participant[i]
    }
}
// 완주하지 못한 선수
// participant	            completion	        return
// [leo, kiki, eden]    	[eden, kiki]	     leo
// [marina, josipa, nikola, vinko, filipa]	[josipa, filipa, marina, nikola]	vinko
// [mislav, stanko, mislav, ana]	[stanko, ana, mislav]	mislav