function solution(cap, n, deliveries, pickups) {
    let answer = 0;
    let delIndex = n-1;
    let picIndex = n-1;
    while(delIndex>=0 || picIndex>=0){
        let deliver_cap = 0;
        let pickup_cap = 0;
        while(deliveries[delIndex] == 0) {
            delIndex--;
        }
        while(pickups[picIndex] == 0) {
            picIndex--;
        }
        answer += (Math.max(delIndex + 1, picIndex + 1)) * 2;
        for(let i = delIndex; i >= 0; i--) {
            if(deliver_cap + deliveries[i] <= cap) {
                deliver_cap += deliveries[i];
                deliveries[i] = 0;
                delIndex--;
            } else {
                deliveries[i] = deliver_cap + deliveries[i] - cap;
                delIndex = i;
                break;
            }
        }
        for(let i = picIndex; i >= 0; i--) {
            if(pickup_cap + pickups[i] <= cap) {
                pickup_cap += pickups[i];
                pickups[i] = 0;
                picIndex--;
            } else {
                pickups[i] = pickup_cap + pickups[i] - cap;
                picIndex = i;
                break;
            }
        }
    }
    return answer;
}