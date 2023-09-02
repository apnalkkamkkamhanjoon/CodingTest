function solution(num_list) {
    const arr = num_list.map((a) => a%2);
    const odd = arr.filter((x) => x === 0).length;
    const even = arr.filter((x) => x === 1).length;
    return [odd, even];
}