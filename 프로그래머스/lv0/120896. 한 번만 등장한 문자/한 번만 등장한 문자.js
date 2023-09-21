function solution(s) {
    const res = []
    for(let i of s) if(s.indexOf(i)===s.lastIndexOf(i)) res.push(i)
    return res.sort().join('')
}