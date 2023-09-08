function solution(hp) {
    let G = Math.floor(hp/5);
    let B = Math.floor((hp%5)/3);
    let E = Math.floor((hp%5)%3);
    return G+B+E;
}