function persistence(num) {
    let calc = 0
    let newNumber = String(num).split("")
    for (let i = 0; num > 10; i++) {
        calc *= newNumber
        num = calc
        console.log(num)
    }
} persistence(999)
