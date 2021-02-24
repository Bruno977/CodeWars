function isPrime(num) {
    let isPrime = 0;
    for(let i = 0; i <= num; i++){
        if(num % i === 0){
            isPrime++
        }
    }
    if(isPrime === 2){
        return true
    }else{
        return false
    }
}
isPrime(113)
