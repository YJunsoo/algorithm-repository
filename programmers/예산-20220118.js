function solution(d, budget) {
    var temp = 0;
    var cnt = 0;
    
    d.sort((a, b) => a-b); // 일반 정렬 내림
    
    for(let i=0; i<d.length; i++) {
        if(budget < d[i]) {
            break;
        } else {
            cnt++
            budget -= d[i];
        }
        
    }
    console.log(cnt);    
    
    return cnt;
}