function solution(n, k) {
    let drink = k;
    let event = Math.floor(n / 10)

    return (n * 12000) + ((drink - event) * 2000);
}