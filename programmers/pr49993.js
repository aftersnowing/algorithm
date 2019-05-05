function solution(skill, tree) {
    let count = 0;
    const regExp = new RegExp(`[^${skill}]`, 'g');
    tree.map((val) => val
        .replace(regExp, ''))
        .forEach((el) => skill.indexOf(el) === 0 ? count++ : null);
    return count
}
// 스킬트리
// skill	skill_trees	           return
// CBD	[BACDE, CBADF, AECB, BDA]	2
