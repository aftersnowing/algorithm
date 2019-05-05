process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const input = data.split(' ').map(Number);
    console.log(('*'.repeat(input[0]) + '\n').repeat(input[1]));
});
// 직사각형 별찍기
// 입력
// 5 3
// 출력
// *****
// *****
// *****