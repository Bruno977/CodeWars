function squareDigits(num){
    let transformString =  num.toString()
    let calc = 0
    let array = []
    for (element of transformString){
        calc = Number(element) ** 2
        array.push(calc)
    }
    return(Number(array.join("")))
}
squareDigits(9119)
