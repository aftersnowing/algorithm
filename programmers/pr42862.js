// function solution(n, lost, reserve) {
//     var newReserve ;
//     var newLost = lost.filter(el => {
//         var matcher = reserve.indexOf(el);
//         if(matcher !== -1){
//             reserve.splice(matcher, 1);
//             newReserve = reserve;
//         }else if(matcher === -1){
//             newReserve = reserve;
//             return true
//         }
//         console.log(newReserve)
//     })
//     return n - newLost.filter(el1 => {
//         var lender = newReserve.find(el2 => Math.abs(el1 - el2) === 1)
//         console.log(lender)
//             newReserve = newReserve.splice(newReserve.indexOf(lender), 1);
//         if(!lender) {return true}
//     }).length
// }

// // 체육복 도둑맞은 친구 빌려주기
// // n	lost	reserve	return
// // 5	[2, 4]	[1, 3, 5]	5
// // 5	[2, 4]	[3]	4
// // 3	[3]	[1]	2


// let test = [1,2,3,4,5,6,7,8,9,10];

// let result = test.map((el, i) => {
//     if(el % 2 === 0) {
//         return el
//     }
// });
// console.log(result)

// let newArr = new Array(10);
// console.log(newArr)


let lost = [2,3,4,5,6,7];
let reserve = [1,3,5,8,9];

lost = lost.filter((el1) => {
    let isTrue = true
    reserve = reserve.filter((el2) => {
        if (el1 === el2) {
            isTrue = false;
            return false
        } else if(el1 - 1 === el2){
            isTrue = false;
            return false
        }
        return true
    });
    return isTrue
})
console.log(lost)
console.log(reserve)