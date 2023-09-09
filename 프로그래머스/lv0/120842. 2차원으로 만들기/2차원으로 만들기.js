function solution(num_list, n) {
    var answer = [];
    for (let i = 0; i < num_list.length; i += n) {
    let nums = []
    for (let j = 0; j < n; j += 1) {
      nums.push(num_list[i + j])
    }
    answer.push(nums)
  }
    return answer;
}