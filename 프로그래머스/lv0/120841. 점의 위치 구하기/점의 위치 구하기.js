function solution(dot) {
    const [x,y]=dot;
    const qua=x*y>0;
    return x>0?(qua?1:4):(qua?3:2);
}