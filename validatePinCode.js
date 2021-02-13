function validatePIN (pin) {
    let convertNumber = Number(pin)
    let isInteger = Number.isInteger(convertNumber)
    let stringSize = pin.length
    if (stringSize === 4 || stringSize === 6){
        if (isInteger === true){
            return true
        }
        else{ 
            return false
        }
    }else{
      return false
    }
  
}validatePIN("1234")
