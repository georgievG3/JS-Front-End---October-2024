function oddEvenSum (number) {

    textNumber = String(number)
    let oddSum = 0
    let evenSum = 0

    for (let i = 0; i < textNumber.length; i++){
        if (Number(textNumber[i]) % 2 == 0) {
            evenSum += Number(textNumber[i])
        } else {
            oddSum += Number(textNumber[i])
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)

}

oddEvenSum(3495892137259234)
