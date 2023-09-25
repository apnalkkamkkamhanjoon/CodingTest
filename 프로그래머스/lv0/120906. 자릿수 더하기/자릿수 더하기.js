function solution(n) {
    return String(n).split('').reduce((arr, cur)=>arr+Number(cur), 0)
}