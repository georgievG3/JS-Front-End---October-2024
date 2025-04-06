function perfectNumber (number) {

    let diviors = []

    for (let i = 1; i < number; i++) {
        
        if (number % i == 0) {
            diviors.push(i)
        }
    }

    if (number == diviors.reduce((accumulator, currentValue) => accumulator + currentValue, 0)) {
        console.log("We have a perfect number!")
    } else {
        console.log("It's not so perfect.")
    }

}

perfectNumber(7)
