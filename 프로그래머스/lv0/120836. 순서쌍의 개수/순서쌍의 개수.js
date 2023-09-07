function solution(n) {
    return Array.from({length:n+1},(a,b)=>b).filter(b=>n%b===0).length;
}