function solution(n) {
    return String(n).split('').reduce((arr, cur)=>arr+cur*1, 0)
}