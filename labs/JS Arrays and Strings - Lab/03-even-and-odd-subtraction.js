function difference(numbers) {

    let oddSum = 0
    let evenSum = 0

    numbers.forEach(number => {
        if (number % 2 == 0) {
            evenSum += number
        } else {
            oddSum += number
        }
    });

    console.log(evenSum - oddSum)
}

difference([3,5,7,9])