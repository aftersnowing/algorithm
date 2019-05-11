function solution(clothes) {
    const type = {};
    let result = 1;
    clothes.forEach(val => {
        if(type[val[1]]) return type[val[1]]++
        type[val[1]] = 1;
    });
    const clothesArr = Object.values(type);
    clothesArr.forEach(val=>{
        result *= (val + 1)
    })
    return result - 1
}
// 위장
// 입출력 예
// clothes	return
// [[yellow_hat, headgear], [blue_sunglasses, eyewear], [green_turban, headgear]]	5
// [[crow_mask, face], [blue_sunglasses, face], [smoky_makeup, face]]	3