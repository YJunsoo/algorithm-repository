function solution(n) {
    var result = 0;
    var temp = [0, 1];
    var i = 0;
    if(2<n) {
        for(i=2; i<n+1; i++) { // i는 입력받은 수를 시작으로 하면 안되며 무조건 2이상
            // F(n) = F(n-1) + F(n-2)
            // n번째 피보나치 수를 1234567으로 나눈 나머지
            temp[i] = (temp[i-1] + temp[i-2]) % 1234567;
        }
        result = temp[n];
    } else { // 애초에 else로 빠지지 않는다.
        result = n % 1234567;
    }
    
    console.log(i);    
    console.log(n);
    console.log(result);
    
    return result;
}