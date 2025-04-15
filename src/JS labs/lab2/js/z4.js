function calculator(a, operator, b) {
    if (operator === "+"){
    result = a + b
    }else if (operator === "-") {
    result = a - b
    }else if (operator === "*") {
        result = a * b
    }else if (operator === "/") {
        result = a / b
    }
    else result = "Не правильно"
    console.log(result)
  }
  calculator(5, "+", 10)
  calculator(25.5, "-", 3)
  
