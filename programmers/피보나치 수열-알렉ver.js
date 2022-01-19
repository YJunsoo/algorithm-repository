function solution(n) {
    // 미안 담에 해줘 ㅈㄴ 피곤하노
    let before = 0; //F1
    let current = 1; //F2
    
    for (let i = 2; i <= n; i++) {
      const temp = ((current % 1234567) + (before % 1234567)) % 1234567; //(F2 나머지 + F1 나머지) % 1234567
      
      before = current; // F1 <- F2
      current = temp; // F2 <- result 
    }
    
    return current;
}