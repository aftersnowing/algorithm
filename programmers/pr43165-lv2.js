function solution(nums, target) {
    let count = 0;
    (function DFS(nums, target, index = 0) {
        if (index === nums.length) {
            let sum = nums.reduce((acc, cur) => acc + cur);
            if (sum === target) count++;
            return
        }
        DFS(nums, target, index + 1);
        nums[index] *= -1;
        DFS(nums, target, index + 1);

    })(nums, target);
    return count
}
// 타겟 넘버
// 입출력 예
// numbers	target	return
// [1, 1, 1, 1, 1]	3	5
// DFS를 써서 처음으로 알고리즘을 풀어봤다.
// 재귀적인 방법말고 다른 방법이 있는지 천천히 알아보자 ㅎㅎ