function operations(numberOne, numberTwo, operator) {
    
    let result;
    switch (operator) {
        case "+":
            result = numberOne + numberTwo;
            break;
        case "-":
            result = numberOne - numberTwo;
            break;
        case "*":
            result = numberOne * numberTwo;
            break;
        case "/":
            result = numberOne / numberTwo;
            break;
        case "%":
            result = numberOne % numberTwo;
            break;
        case "**":
            result = numberOne ** numberTwo;
            break;
    }

    console.log(result)
}

operations(2, 3, "+")