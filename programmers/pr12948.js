function solution(phone_number) {
    return phone_number.replace(/\d(?=\d{4})/g, "*");
}

function solution(num) {
    return num.split('').map((el,i) => num.length - i < 5 ? el : '*').join('');
}

// 핸드폰 번호 가리기
// 입출력 예
// phone_number	return
// 01033334444	*******4444
// 027778888	*****8888