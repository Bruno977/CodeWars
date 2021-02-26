function divisors(integer) {
  let arrayDivisors = []
  let isPrime = 0
  for (let i = 0; i <= integer; i++){
    if(integer % i === 0 && i != 1 && i!= integer){arrayDivisors.push(i)}
    if(integer % i === 0){isPrime++}
  }
  if(isPrime == 2){
    return `${integer} is prime`
  }else{
    return arrayDivisors
  }
}divisors(13)
