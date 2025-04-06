function cooking (number, operator1, operator2, operator3, operator4, operator5) {

    let operators = [operator1, operator2, operator3, operator4, operator5]
    let numberInt = Number(number)

    for (let i = 0; i < 5; i++) {

        let operator = operators[i]

        switch (operator) {
            case "chop":

                numberInt /= 2

                break;
            
            case "dice":

                numberInt = Math.sqrt(numberInt)

                break;

            case "spice":

                numberInt += 1

                break;
            
            case "bake":

                numberInt *= 3

                break;

            case "fillet":

                numberInt *= 0.80

                break;
        }

        console.log(numberInt)

    }

}

cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
