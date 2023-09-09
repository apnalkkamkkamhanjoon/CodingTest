function solution(numbers, k) {
    let target = (k-1)*2%numbers.length;
    return numbers[target];
}