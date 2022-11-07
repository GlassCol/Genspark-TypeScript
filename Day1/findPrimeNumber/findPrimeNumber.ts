//method to check whether a number is prime
function findPrime(num: number){
    if(num == 1) return false;
    for(let i = 2; i < num; i++){
    if(num % i == 0) return false;
    }
    return true;
}

console.log(findPrime(2));
console.log(findPrime(4));
console.log(findPrime(13));