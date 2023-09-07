function solution(emergency) {
    var answer = [...emergency].sort((a,b)=>b-a);
    return emergency.map((a)=>answer.indexOf(a)+1);
}