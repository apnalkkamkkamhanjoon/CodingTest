function solution(my_string, num1, num2) {
    let new_string = my_string.split('');
    [new_string[num1], new_string[num2]] = [new_string[num2], new_string[num1]]
    return new_string.join('')
}