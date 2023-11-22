function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;
    for(let i=0; i< numbers.length; i++) {
        answer = answer.split(numbers[i]);
        answer = answer.join(i);
    }
    return Number(answer);
}