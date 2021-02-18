function calcNumbers(number1, number2){
    let array = []
    let sum = 0
    for(let i = number1; i <= number2; i++){
        sum = sum + i
        array.push(i)
    }
    console.log(`${array.join(" + ")}  =  ${sum}`)
}
let num1 = Number(prompt("informe o primeiro número: "))
let num2 = Number(prompt("informe o segundo número: "))
if (num1 > num2){
    calcNumbers(num2, num1)
}else{
    calcNumbers(num1, num2)
}
