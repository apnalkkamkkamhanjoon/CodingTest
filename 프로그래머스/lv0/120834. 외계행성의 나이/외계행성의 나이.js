function solution(age) {
    return age.toString().replace(/./g, (i) => "abcdefghij"[i]);
}