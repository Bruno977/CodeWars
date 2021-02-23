const binary = (a, b) => { 
    let sum = a + b
    let array = []
    
    for (let i = 0; i <= sum; i++){
        let receiveRest = sum%2
        array.push(Math.trunc(receiveRest))
        sum /= 2
        i=0
    }
    return (array.join(""))
}
binary(120, 4)
