// 0,1,1,2,3,4,5


const number = 6;

function solution(number){
    if(number === 0) return 0;
    let prev1 = 0;
    let prev2 = 1;
    let current;
    
    for(let i =2; i <= number; i++){
        current = prev1 + prev2;
        prev1 = prev2;
        prev2 = current;
    }
    return prev2;
    
}

console.log(solution(number));
