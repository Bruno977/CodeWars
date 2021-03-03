function persistence(num) {
    let calc = 0
    let newNumber = String(num).split("")
    calc = newNumber[0]
    for (let i = 0; newNumber.length > 1; i++) {
        calc *= newNumber[i + 1]
        console.log(calc)
    }
} persistence(999)