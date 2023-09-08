const fac = (n) => n===0?1:n*fac(n-1);

function solution(balls, share) {
    return Math.round(fac(balls)/fac(balls-share)/fac(share));
}