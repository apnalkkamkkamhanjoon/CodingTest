function solution(numer1, denom1, numer2, denom2) {
    let numer = (numer1 * denom2) + (numer2 * denom1);
    let denom = denom1 * denom2;
    let GCD = (a, b) => (a % b == 0 ? b : GCD(b, a % b));
    const gcd = GCD(numer, denom);
    return [numer / gcd, denom / gcd];
}